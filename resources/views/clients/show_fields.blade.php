<!-- Id Field -->
<div class="form-group">
    {!! Form::label('id', 'Id:') !!}
    <p>{!! $client->id !!}</p>
</div>

<!-- Companyname Field -->
<div class="form-group">
    {!! Form::label('companyName', 'Companyname:') !!}
    <p>{!! $client->companyName !!}</p>
</div>

<!-- Logo Field -->
<div class="form-group">
    {!! Form::label('logo', 'Logo:') !!}
    <p>{!! $client->logo !!}</p>
</div>

<!-- Secteuractivite Field -->
<div class="form-group">
    {!! Form::label('secteurActivite', 'Secteuractivite:') !!}
    <p>{!! $client->secteurActivite !!}</p>
</div>

<!-- User Id Field -->
<div class="form-group">
    {!! Form::label('user_id', 'User Id:') !!}
    <p>{!! $client->user_id !!}</p>
</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{!! $client->created_at !!}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{!! $client->updated_at !!}</p>
</div>

<!-- Deleted At Field -->
<div class="form-group">
    {!! Form::label('deleted_at', 'Deleted At:') !!}
    <p>{!! $client->deleted_at !!}</p>
</div>

