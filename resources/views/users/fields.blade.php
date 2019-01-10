<!-- Companyname Field -->
<div class="form-group col-sm-6">
    {!! Form::label('companyName', 'Companyname:') !!}
    {!! Form::text('companyName', null, ['class' => 'form-control']) !!}
</div>

<!-- Managername Field -->
<div class="form-group col-sm-6">
    {!! Form::label('managerName', 'Managername:') !!}
    {!! Form::text('managerName', null, ['class' => 'form-control']) !!}
</div>

<!-- Phonenumber Field -->
<div class="form-group col-sm-6">
    {!! Form::label('phoneNumber', 'Phonenumber:') !!}
    {!! Form::text('phoneNumber', null, ['class' => 'form-control']) !!}
</div>

<!-- Mobilenumber Field -->
<div class="form-group col-sm-6">
    {!! Form::label('mobileNumber', 'Mobilenumber:') !!}
    {!! Form::text('mobileNumber', null, ['class' => 'form-control']) !!}
</div>

<!-- Address Field -->
<div class="form-group col-sm-6">
    {!! Form::label('address', 'Address:') !!}
    {!! Form::text('address', null, ['class' => 'form-control']) !!}
</div>

<!-- City Field -->
<div class="form-group col-sm-6">
    {!! Form::label('city', 'City:') !!}
    {!! Form::text('city', null, ['class' => 'form-control']) !!}
</div>

<!-- Accounttype Field -->
<div class="form-group col-sm-6">
    {!! Form::label('accountType', 'Accounttype:') !!}
    {!! Form::text('accountType', null, ['class' => 'form-control']) !!}
</div>

<!-- Logo Field -->
<div class="form-group col-sm-6">
    {!! Form::label('logo', 'Logo:') !!}
    {!! Form::text('logo', null, ['class' => 'form-control']) !!}
</div>

<!-- Secteuractivite Field -->
<div class="form-group col-sm-6">
    {!! Form::label('secteurActivite', 'Secteuractivite:') !!}
    {!! Form::text('secteurActivite', null, ['class' => 'form-control']) !!}
</div>

<!-- Status Field -->
<div class="form-group col-sm-6">
    {!! Form::label('status', 'Status:') !!}
    {!! Form::text('status', null, ['class' => 'form-control']) !!}
</div>

<!-- Accountcredit Field -->
<div class="form-group col-sm-6">
    {!! Form::label('accountCredit', 'Accountcredit:') !!}
    {!! Form::number('accountCredit', null, ['class' => 'form-control']) !!}
</div>

<!-- Role Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('role_id', 'Role Id:') !!}
    {!! Form::number('role_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Email Field -->
<div class="form-group col-sm-6">
    {!! Form::label('email', 'Email:') !!}
    {!! Form::email('email', null, ['class' => 'form-control']) !!}
</div>

<!-- Password Field -->
<div class="form-group col-sm-6">
    {!! Form::label('password', 'Password:') !!}
    {!! Form::password('password', ['class' => 'form-control']) !!}
</div>

<!-- Remember Token Field -->
<div class="form-group col-sm-6">
    {!! Form::label('remember_token', 'Remember Token:') !!}
    {!! Form::text('remember_token', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('users.index') !!}" class="btn btn-default">Cancel</a>
</div>
