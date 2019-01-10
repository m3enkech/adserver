<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateEventBusRequest;
use App\Http\Requests\UpdateEventBusRequest;
use App\Repositories\EventBusRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;
use App\Models\EventBus;
use Calendar;



class EventBusController extends AppBaseController
{
    /** @var  EventBusRepository */
    private $eventBusRepository;

    public function __construct(EventBusRepository $eventBusRepo)
    {
        $this->eventBusRepository = $eventBusRepo;
    }

    /**
     * Display a listing of the EventBus.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $eventBuses = [];
        $data  = EventBus::all();
        if($data ->count()) {
            foreach ($data  as $key => $value) {
                $eventBuses[] = Calendar::event(
                    $value->event->title.' - '.$value->bus->busNumber.' '.$value->bus->city,
                    true,
                    new \DateTime($value->date_diffusion),
                    new \DateTime($value->date_end_diffusion.' +1 day'),
                    null,
                    // Add color and link on event
                    [
                        'user_id' =>$value->user_id,
                        'event_id' =>$value->event_id,
                        'bus_id' =>$value->bus_id,
                        'ville_id' =>$value->ville_id,
                    ]
                );
            }
        }
   

        $calendar = Calendar::addEvents($eventBuses);
         //dd($calendar)    ;
        return view('event_buses.index', compact('calendar','data'));
        
    }

    /**
     * Show the form for creating a new EventBus.
     *
     * @return Response
     */
    public function create()
    {
        return view('event_buses.create');
    }

    /**
     * Store a newly created EventBus in storage.
     *
     * @param CreateEventBusRequest $request
     *
     * @return Response
     */
    public function store(CreateEventBusRequest $request)
    {
        $input = $request->all();

        $eventBus = $this->eventBusRepository->create($input);

        Flash::success('Event Bus saved successfully.');

        return redirect(route('eventBuses.index'));
    }

    /**
     * Display the specified EventBus.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $eventBus = $this->eventBusRepository->findWithoutFail($id);

        if (empty($eventBus)) {
            Flash::error('Event Bus not found');

            return redirect(route('eventBuses.index'));
        }

        return view('event_buses.show')->with('eventBus', $eventBus);
    }

    /**
     * Show the form for editing the specified EventBus.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $eventBus = $this->eventBusRepository->findWithoutFail($id);

        if (empty($eventBus)) {
            Flash::error('Event Bus not found');

            return redirect(route('eventBuses.index'));
        }

        return view('event_buses.edit')->with('eventBus', $eventBus);
    }

    /**
     * Update the specified EventBus in storage.
     *
     * @param  int              $id
     * @param UpdateEventBusRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateEventBusRequest $request)
    {
        $eventBus = $this->eventBusRepository->findWithoutFail($id);

        if (empty($eventBus)) {
            Flash::error('Event Bus not found');

            return redirect(route('eventBuses.index'));
        }

        $eventBus = $this->eventBusRepository->update($request->all(), $id);

        Flash::success('Event Bus updated successfully.');

        return redirect(route('eventBuses.index'));
    }

    /**
     * Remove the specified EventBus from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $eventBus = $this->eventBusRepository->findWithoutFail($id);

        if (empty($eventBus)) {
            Flash::error('Event Bus not found');

            return redirect(route('eventBuses.index'));
        }

        $this->eventBusRepository->delete($id);

        Flash::success('Event Bus deleted successfully.');

        return redirect(route('eventBuses.index'));
    }
}
