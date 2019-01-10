<!-- Secteur Name Field -->
<div class="form-group col-sm-6">
    {!! Form::label('secteur_name', 'Secteur Name:') !!}
    {!! Form::text('secteur_name', null, ['class' => 'form-control']) !!}
</div>

<!-- Ville Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('ville_id', 'Ville Id:') !!}
    {!! Form::number('ville_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('secteurs.index') !!}" class="btn btn-default">Cancel</a>
</div>
