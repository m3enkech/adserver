<!-- Companyname Field -->
<div class="form-group col-sm-6">
    {!! Form::label('companyName', 'Companyname:') !!}
    {!! Form::text('companyName', null, ['class' => 'form-control']) !!}
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

<!-- User Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('user_id', 'User Id:') !!}
    {!! Form::number('user_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('clients.index') !!}" class="btn btn-default">Cancel</a>
</div>
