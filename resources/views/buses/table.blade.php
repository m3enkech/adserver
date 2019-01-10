<table class="table table-responsive" id="buses-table">
    <thead>
        <tr>
            <th>Bus Number</th>
        <th>Bus Trajectory</th>
        <th>Quantity</th>
        <th>Bus Company</th>
        <th>City</th>
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($buses as $bus)
        <tr>
            <td>{!! $bus->busNumber !!}</td>
            <td><a href="{!! $bus->busTrajectory !!}" target="_blank">Voir le trajet</a></td>
            <td>{!! $bus->busQuantity !!}</td>
            <td>{!! $bus->busCompany !!}</td>
            <td>{!! $bus->city !!}</td>
            <td>
                {!! Form::open(['route' => ['buses.destroy', $bus->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('buses.show', [$bus->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('buses.edit', [$bus->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>