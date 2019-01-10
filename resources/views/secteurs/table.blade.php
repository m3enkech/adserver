<table class="table table-responsive" id="secteurs-table">
    <thead>
        <tr>
            <th>Secteur Name</th>
        <th>Ville Id</th>
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($secteurs as $secteur)
        <tr>
            <td>{!! $secteur->secteur_name !!}</td>
            <td>{!! $secteur->ville_id !!}</td>
            <td>
                {!! Form::open(['route' => ['secteurs.destroy', $secteur->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('secteurs.show', [$secteur->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('secteurs.edit', [$secteur->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>