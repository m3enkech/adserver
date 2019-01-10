<!-- Title Field -->
<div class="form-group col-sm-6">
    {!! Form::label('title', 'Title:') !!}
    {!! Form::text('title', null, ['class' => 'form-control']) !!}
</div>

<!-- Exclusivity Field -->
<div class="form-group col-sm-6">
    {!! Form::label('exclusivity', 'Exclusivity:') !!}
    {!! Form::text('exclusivity', null, ['class' => 'form-control', 'onkeyup' =>'test();']) !!}
</div>

<!-- Ad Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('ad_id', 'Ad Name:') !!}
    <select name="ad_id" id="ad_id" class="selectpicker form-control" data-live-search="true"
        @if(isset($event)):
           disabled='true'
        @endif
    >
            @foreach($ads as $ad) 
      <option value='{!! $ad->id !!}' <?php if(isset($event)): if ($ad->id == $event->ad_id ): ?>
                     selected
                 <?php endif; endif; ?>>{!! $ad->adName !!}</option>
            @endforeach
    </select>
</div>

<div class="form-group col-sm-12">
  <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Panel List Group with Expandable Setail Section</h3>
        </div>   
        <ul class="list-group">
            <li class="list-group-item">
                <div class="row toggle" id="dropdown-detail-1" data-toggle="detail-1">
                    <div class="col-xs-10">
                        Casablanca
                    </div>
                    <div class="col-xs-2"><i class="fa fa-chevron-down pull-right"></i></div>
                </div>
                <div id="detail-1">
                    <hr></hr>
                    <div class="container">
                        <div class="fluid-row">
                            <div class="col-xs-1">
                                Detail:
                            </div>
                            <div class="col-xs-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div class="col-xs-1">
                                Detail:
                            </div>
                            <div class="col-xs-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                </div>
            </li>
                        <li class="list-group-item">
                <div class="row toggle" id="dropdown-detail-2" data-toggle="detail-2">
                    <div class="col-xs-10">
                        Rabat
                    </div>
                    <div class="col-xs-2"><i class="fa fa-chevron-down pull-right"></i></div>
                </div>
                <div id="detail-2">
                    <hr></hr>
                    <div class="container">
                        <div class="fluid-row">
                            <div class="col-xs-1">
                                Detail:
                            </div>
                            <div class="col-xs-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div class="col-xs-1">
                                Detail:
                            </div>
                            <div class="col-xs-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
  </div>
</div>