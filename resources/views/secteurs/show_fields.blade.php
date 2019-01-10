<!-- Id Field -->
<div class="form-group">
    {!! Form::label('id', 'Id:') !!}
    <p>{!! $secteur->id !!}</p>
</div>

<!-- Secteur Name Field -->
<div class="form-group">
    {!! Form::label('secteur_name', 'Secteur Name:') !!}
    <p>{!! $secteur->secteur_name !!}</p>
</div>

<!-- Ville Id Field -->
<div class="form-group">
    {!! Form::label('ville_id', 'Ville Id:') !!}
    <p>{!! $secteur->ville_id !!}</p>
</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{!! $secteur->created_at !!}</p>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{!! $secteur->updated_at !!}</p>
</div>

<!-- Deleted At Field -->
<div class="form-group">
    {!! Form::label('deleted_at', 'Deleted At:') !!}
    <p>{!! $secteur->deleted_at !!}</p>
</div>

