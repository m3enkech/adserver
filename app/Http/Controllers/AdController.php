<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAdRequest;
use App\Http\Requests\UpdateAdRequest;
use App\Repositories\AdRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;
use Auth;
use App\Models\Client;
use App\Models\Event;
use App\Models\EventBus;


class AdController extends AppBaseController
{
    /** @var  AdRepository */
    private $adRepository;

    public function __construct(AdRepository $adRepo)
    {
        $this->adRepository = $adRepo;
    }

    /**
     * Display a listing of the Ad.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->adRepository->pushCriteria(new RequestCriteria($request));
        $ads = $this->adRepository->all();

        return view('ads.index')
            ->with('ads', $ads);
    }

    /**
     * Show the form for creating a new Ad.
     *
     * @return Response
     */
    public function create()
    {
        $clients = Client::all();
        return view('ads.create', compact('clients'));
    }

    /**
     * Store a newly created Ad in storage.
     *
     * @param CreateAdRequest $request
     *
     * @return Response
     */
    public function store(CreateAdRequest $request)
    {
        if (Auth::check()) {
            $input = $request->all();
            $this->validate($request, [
                'adFileName' => 'required',
            ]);
            if($request->hasfile('adFileName')){

                $vidName = time().'.'.$request->file('adFileName')->getClientOriginalExtension();
                $request->file('adFileName')->move(public_path('storage/'.Auth::id().'/'), $vidName);
                $request->merge( array( 'adFileName' => $vidName ) );
                $input = array_merge($input , array('adFileName'=> $vidName,'user_id'=> Auth::id()));

            }
        }
        else {
            return $request->expectsJson()
                ? response()->json(['message' => $exception->getMessage()], 401)
                : redirect()->guest(route('login'));
        }
        

        $input = $this->adRepository->create($input);

        Flash::success('Ad saved successfully.');

        return redirect(route('ads.index'));
    }

    /**
     * Display the specified Ad.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $ad = $this->adRepository->findWithoutFail($id);

        if (empty($ad)) {
            Flash::error('Ad not found');

            return redirect(route('ads.index'));
        }

        return view('ads.show')->with('ad', $ad);
    }

    /**
     * Show the form for editing the specified Ad.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $ad = $this->adRepository->findWithoutFail($id);

        if (empty($ad)) {
            Flash::error('Ad not found');

            return redirect(route('ads.index'));
        }

        return view('ads.edit')->with('ad', $ad);
    }

    /**
     * Update the specified Ad in storage.
     *
     * @param  int              $id
     * @param UpdateAdRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateAdRequest $request)
    {
        $ad = $this->adRepository->findWithoutFail($id);

        if (empty($ad)) {
            Flash::error('Ad not found');

            return redirect(route('ads.index'));
        }

        $ad = $this->adRepository->update($request->all(), $id);

        Flash::success('Ad updated successfully.');

        return redirect(route('ads.index'));
    }

    /**
     * Remove the specified Ad from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $ad = $this->adRepository->findWithoutFail($id);
        $event = Event::where('ad_id', $id)->get(['id']);
        $eventBus = EventBus::where('event_id', $event->toArray())->get(['id']);

        EventBus::destroy($eventBus->toArray());
        Event::destroy($event->toArray());


        if (empty($ad)) {
            Flash::error('Ad not found');

            return redirect(route('ads.index'));
        }

        $this->adRepository->delete($id);

        Flash::success('Ad deleted successfully.');

        return redirect(route('ads.index'));
    }
}
