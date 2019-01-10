<!-- Title Field -->
<div class="form-group col-sm-6">
    {!! Form::label('title', 'Title:') !!}
    {!! Form::text('title', null, ['class' => 'form-control']) !!}
</div>

<!-- Url Field -->
<div class="form-group col-sm-6">
    {!! Form::label('url', 'Url:') !!}
    {!! Form::text('url', null, ['class' => 'form-control']) !!}
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
     <table id="myTable" class="table order-list">
    <thead>
        <tr>
            <td>Event Date</td>
            <td>Event start time</td>
            <td>Event end time</td>
            <td>Bus Number</td>
            <td>City</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="col-sm-2">
                <input type="date" name="event_date[]" class="form-control" />
            </td>
            <td class="col-sm-2">
                <select name="event_stime[]" class="form-control" data-live-search="true">
                        @for ($i = 6; $i < 24; $i++)         
                        <option value="{{$i}}">{{ str_pad($i, 2, '0', STR_PAD_LEFT) }}:00</option>
                        @endfor
                </select>
            </td>
            <td class="col-sm-2">
                <select name="event_etime[]" class="form-control" data-live-search="true">
                        @for ($i = 6; $i < 24; $i++)         
                        <option value="{{$i}}">{{ str_pad($i, 2, '0', STR_PAD_LEFT) }}:00</option>
                        @endfor
                </select>
            </td>
            <td class="col-sm-3">
                <select name="bus_id[]"  class="form-control" data-live-search="true"
                        @if(isset($event)):
                           disabled='true'
                        @endif
                    >
                            @foreach($buses as $bus) 
                      <option value="{!! $bus->id !!}" <?php if(isset($eventBus)): if ($bus->id == $eventBus->bus_id ): ?>
                                     selected
                                 <?php endif; endif; ?>>{!! $bus->busNumber.' '.$bus->city !!}</option>
                            @endforeach
                    </select>
            </td> 
            <td class="col-sm-2">
                <input type="text" name="city[]"  class="form-control"/>
            </td>
            <td class="col-sm-1"><a class="deleteRow"></a>

            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="5" style="text-align: left;">
                <input type="button" class="btn btn-lg btn-block " id="addrow" value="Add Row" />
            </td>
        </tr>
        <tr>
        </tr>
    </tfoot>
</table>

</div>
<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('events.index') !!}" class="btn btn-default">Cancel</a>
</div>


<script type="text/javascript">
$('#account_credit').on("change, keyup",function(){ test(); });
function test() {
    var exclus = document.getElementById("exclusivity").value;
    
     if (exclus){
        alert(exclus);
        document.getElementById("account_credit").innerHTML = "{!! Auth::user()->accountCredit+10 !!}";
    }
    
}
</script>