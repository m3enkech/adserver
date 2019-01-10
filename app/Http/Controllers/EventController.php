<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Http\Requests\CreateEventBusRequest;
use App\Http\Requests\UpdateEventBusRequest;
use App\Repositories\EventRepository;
use App\Repositories\EventBusRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;
use Calendar;
use App\Models\Event;
use App\Models\Ad;
use App\Models\EventBus;
use App\Models\Bus;
use App\Models\Ville;
use Auth;

class EventController extends AppBaseController
{
    /** @var  EventRepository */
    private $eventRepository;

    public function __construct(EventRepository $eventRepo)
    {
        $this->eventRepository = $eventRepo;
    }

    /**
     * Display a listing of the Event.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
       $this->eventRepository->pushCriteria(new RequestCriteria($request));
        $events = $this->eventRepository->all();

        return view('events.index')
            ->with('events', $events);
    
    }

    /**
     * Show the form for creating a new Event.
     *
     * @return Response
     */
    public function create()
    {
        $ads = Ad::all();
        $buses = Bus::all();
        
        return view('events.create', compact('ads', 'buses'));
    }

    /**
     * Show the form for creating a new Event.
     *
     * @return Response
     */
    public function createOne()
    {
        $ads = Ad::all();
        $buses = Bus::all();
        $villes = Ville::all();
        return view('events.create_one', compact('ads','buses','villes'));
    }
    


    /**
     * Store a newly created Event in storage.
     *
     * @param CreateEventRequest $request
     *
     * @return Response
     */
    public function store(CreateEventRequest $request)
    {
        if (Auth::check()) {
            $input = $request->all();
            //dd(count($request->event_date));
            $input = array_merge($input , array('user_id'=> Auth::id()));
            $event = $this->eventRepository->create($input);
            for ($i=0; $i < count($request->event_date) ; $i++) { 
                $oneEvent = new EventBus();

                $oneEvent->date_diffusion = new \DateTime($request->event_date[$i].'+'.$request->event_stime[$i].' hour');
                $oneEvent->date_end_diffusion = new \DateTime($request->event_date[$i].'+'.$request->event_etime[$i].' hour');

                $oneEvent->heure_diffusion_debut = $request->event_stime[$i];
                $oneEvent->heure_diffusion_fin = $request->event_etime[$i];
                $oneEvent->user_id = Auth::user()->id;
                $oneEvent->event_id = $event->id;
                $oneEvent->bus_id = $request->bus_id[$i];
                $oneEvent->ville_id = 4;
                $oneEvent->save();            
            }

            Flash::success('Event saved successfully.');

            return redirect(route('events.index'));
        }
        else {
            return $request->expectsJson()
                ? response()->json(['message' => $exception->getMessage()], 401)
                : redirect()->guest(route('login'));
        }
    }

    /**
     * Display the specified Event.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $event = $this->eventRepository->findWithoutFail($id);

        if (empty($event)) {
            Flash::error('Event not found');

            return redirect(route('events.index'));
        }

        return view('events.show')->with('event', $event);
    }
    


    /**
     * Show the form for editing the specified Event.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $event = $this->eventRepository->findWithoutFail($id);

        if (empty($event)) {
            Flash::error('Event not found');

            return redirect(route('events.index'));
        }

        return view('events.edit')->with('event', $event);
    }

    /**
     * Update the specified Event in storage.
     *
     * @param  int              $id
     * @param UpdateEventRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateEventRequest $request)
    {
        $event = $this->eventRepository->findWithoutFail($id);

        if (empty($event)) {
            Flash::error('Event not found');

            return redirect(route('events.index'));
        }

        $event = $this->eventRepository->update($request->all(), $id);

        Flash::success('Event updated successfully.');

        return redirect(route('events.index'));
    }

    /**
     * Remove the specified Event from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $event = $this->eventRepository->findWithoutFail($id);
         $eventBus = EventBus::where('event_id', $id)->get(['id']);

        EventBus::destroy($eventBus->toArray());

        if (empty($event)) {
            Flash::error('Event not found');

            return redirect(route('events.index'));
        }

        $this->eventRepository->delete($id);

        Flash::success('Event deleted successfully.');

        return redirect(route('events.index'));
    }
}
