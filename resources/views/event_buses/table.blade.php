<table class="table table-responsive" id="eventBuses-table">
    <thead>
        <tr>
            <th>Date debut Diffusion</th>
        <th>Date fin Diffusion</th>
        <th>Event Name</th>
        <th>Bus Number and City</th>
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($data as $eventBus)
        <tr>
            <td>{!! $eventBus->date_diffusion !!}</td>
            <td>{!! $eventBus->date_end_diffusion !!}</td>
            <td>{!! $eventBus->event->title !!}</td>
            <td>{!! $eventBus->bus->busNumber.' - '.$eventBus->ville->name !!}</td>
            <td>
                {!! Form::open(['route' => ['eventBuses.destroy', $eventBus->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('eventBuses.show', [$eventBus->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! URL::to('buses/display/'.$eventBus->bus_id) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-play"></i></a>
                    <a href="{!! route('eventBuses.edit', [$eventBus->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>