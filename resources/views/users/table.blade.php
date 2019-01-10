<table class="table table-responsive" id="users-table">
    <thead>
        <tr>
            <th>Companyname</th>
        <th>Managername</th>
        <th>Phonenumber</th>
        <th>City</th>
        <th>Accounttype</th>
        <th>Logo</th>
        <th>Secteuractivite</th>
        <th>Status</th>
        <th>Accountcredit</th>
        <th>Role Id</th>
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($users as $user)
        <tr>
            <td>{!! $user->companyName !!}</td>
            <td>{!! $user->managerName !!}</td>
            <td>{!! $user->phoneNumber !!}</td>
            <td>{!! $user->city !!}</td>
            <td>{!! $user->accountType !!}</td>
            <td>{!! $user->logo !!}</td>
            <td>{!! $user->secteurActivite !!}</td>
            <td>{!! $user->status !!}</td>
            <td>{!! $user->accountCredit !!}.00 DH</td>
            <td>{!! $user->role->name !!}</td>
            <td>
                {!! Form::open(['route' => ['users.destroy', $user->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('users.show', [$user->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('users.edit', [$user->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>