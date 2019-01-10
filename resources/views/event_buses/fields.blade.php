<!-- Date Diffusion Field -->
<div class="form-group col-sm-6">
    {!! Form::label('date_diffusion', 'Date Diffusion:') !!}
    {!! Form::date('date_diffusion', null, ['class' => 'form-control']) !!}
</div>

<!-- Heure Diffusion Debut Field -->
<div class="form-group col-sm-6">
    {!! Form::label('heure_diffusion_debut', 'Heure Diffusion Debut:') !!}
    {!! Form::text('heure_diffusion_debut', null, ['class' => 'form-control']) !!}
</div>

<!-- Heure Diffusion Fin Field -->
<div class="form-group col-sm-6">
    {!! Form::label('heure_diffusion_fin', 'Heure Diffusion Fin:') !!}
    {!! Form::text('heure_diffusion_fin', null, ['class' => 'form-control']) !!}
</div>

<!-- User Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('user_id', 'User Id:') !!}
    {!! Form::number('user_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Event Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('event_id', 'Event Id:') !!}
    {!! Form::number('event_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Bus Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('bus_id', 'Bus Id:') !!}
    {!! Form::number('bus_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Ville Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('ville_id', 'Ville Id:') !!}
    {!! Form::number('ville_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('eventBuses.index') !!}" class="btn btn-default">Cancel</a>
</div>
