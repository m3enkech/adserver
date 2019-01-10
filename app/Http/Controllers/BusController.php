<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBusRequest;
use App\Http\Requests\UpdateBusRequest;
use App\Repositories\BusRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;
use App\Models\EventBus;
use DB;
use Carbon\Carbon;
use App\Models\Ville;

class BusController extends AppBaseController
{
    /** @var  BusRepository */
    private $busRepository;

    public function __construct(BusRepository $busRepo)
    {
        $this->busRepository = $busRepo;
    }

    /**
     * Display a listing of the Bus.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->busRepository->pushCriteria(new RequestCriteria($request));
        $buses = $this->busRepository->all();

        return view('buses.index')
            ->with('buses', $buses);
    }

    /**
     * Show the form for creating a new Bus.
     *
     * @return Response
     */
    public function create()
    {
        $villes = Ville::all();
        return view('buses.create', compact('villes'));
    }

    /**
     * Store a newly created Bus in storage.
     *
     * @param CreateBusRequest $request
     *
     * @return Response
     */
    public function store(CreateBusRequest $request)
    {
        $input = $request->except('secteurs');
        $secteurs = '';
        foreach ($request->secteurs as $value) {
            $secteurs .= $value.',';
        }
        $input = array_merge($input , array( 'secteurs' => $secteurs));
        $bus = $this->busRepository->create($input);

        Flash::success('Bus saved successfully.');

        return redirect(route('buses.index'));
    }

    /**
     * Display the specified Bus.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $bus = $this->busRepository->findWithoutFail($id);

        if (empty($bus)) {
            Flash::error('Bus not found');

            return redirect(route('buses.index'));
        }

        return view('buses.show')->with('bus', $bus);
    }


    /**
     * Display the specified Event.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function displayList($id)
    {
        /*$event_details_list = DB::table('event_bus')
            ->join('events', 'event_bus.event_id', '=', 'events.id')
            ->join('buses', 'event_bus.bus_id', '=', 'buses.id')
            ->select('events.ad_id','buses.busNumber','events.title','event_bus.date_diffusion','event_bus.ville_id')            
            ->get();
            */
        //$event_details = EventBus::where('bus_id','=',$id)->get();
        //dd($event_details->events);
        $events_list = EventBus::where('bus_id','=',$id)
                        ->whereDate('date_diffusion',Carbon::today())
                        ->get();
        //dd($events_list);
        if (empty($events_list)) {
            Flash::error('Event not found');

            return redirect(route('buses.index'));
        }

        return view('buses.display')->with('event_details', $events_list);
    }


    /**
     * Show the form for editing the specified Bus.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $bus = $this->busRepository->findWithoutFail($id);
        $villes = Ville::all();
        if (empty($bus)) {
            Flash::error('Bus not found');

            return redirect(route('buses.index'));
        }

        return view('buses.edit',compact('bus', 'villes'));
    }

    /**
     * Update the specified Bus in storage.
     *
     * @param  int              $id
     * @param UpdateBusRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateBusRequest $request)
    {
        $bus = $this->busRepository->findWithoutFail($id);

        if (empty($bus)) {
            Flash::error('Bus not found');

            return redirect(route('buses.index'));
        }

        $bus = $this->busRepository->update($request->all(), $id);

        Flash::success('Bus updated successfully.');

        return redirect(route('buses.index'));
    }

    /**
     * Remove the specified Bus from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $bus = $this->busRepository->findWithoutFail($id);

        if (empty($bus)) {
            Flash::error('Bus not found');

            return redirect(route('buses.index'));
        }

        $this->busRepository->delete($id);

        Flash::success('Bus deleted successfully.');

        return redirect(route('buses.index'));
    }
}
