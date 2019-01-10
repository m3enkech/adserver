<!-- Adname Field -->
<div class="form-group col-sm-6">
    {!! Form::label('adName', 'Adname:') !!}
    {!! Form::text('adName', null, ['class' => 'form-control']) !!}
</div>

<!-- Adfilename Field -->
<div class="form-group col-sm-6">
    {!! Form::label('adFileName', 'Adfilename:') !!}
    {!! Form::file('adFileName',['class' => 'form-control']) !!}</div>

<!-- Adsecteur Field -->
<div class="form-group col-sm-6">
    {!! Form::label('adSecteur', 'Adsecteur:') !!}
    {!! Form::text('adSecteur', null, ['class' => 'form-control']) !!}
</div>

<!-- Status Field -->
<div class="form-group col-sm-6">
    {!! Form::label('status', 'Status:') !!}
    {!! Form::text('status', null, ['class' => 'form-control']) !!}
</div>

<!-- Client Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('client_id', 'Client Name:') !!}
    <select name="client_id" id="client_id" class="selectpicker form-control" data-live-search="true"
        @if(isset($event)):
           disabled='true'
        @endif
    >
            @foreach($clients as $client) 
      <option value='{!! $client->id !!}' <?php if(isset($ad)): if ($ad->client_id == $client->id ): ?>
                     selected
                 <?php endif; endif; ?>>{!! $client->companyName !!}</option>
            @endforeach
    </select>
</div>

<!-- User Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('user_id', 'User Id:') !!}
    {!! Form::number('user_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('ads.index') !!}" class="btn btn-default">Cancel</a>
</div>
