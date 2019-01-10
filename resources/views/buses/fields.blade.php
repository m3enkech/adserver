<!-- Busnumber Field -->
<div class="form-group col-sm-6">
    {!! Form::label('busNumber', 'Busnumber:') !!}
    {!! Form::text('busNumber', null, ['class' => 'form-control']) !!}
</div>

<!-- Bustrajectory Field -->
<div class="form-group col-sm-12 col-lg-12">
    {!! Form::label('busTrajectory', 'Bustrajectory:') !!}
    {!! Form::textarea('busTrajectory', null, ['class' => 'form-control']) !!}
</div>

<!-- Busquantity Field -->
<div class="form-group col-sm-6">
    {!! Form::label('busQuantity', 'Busquantity:') !!}
    {!! Form::number('busQuantity', null, ['class' => 'form-control']) !!}
</div>

<!-- Buscompany Field -->
<div class="form-group col-sm-6">
    {!! Form::label('busCompany', 'Buscompany:') !!}
    {!! Form::text('busCompany', null, ['class' => 'form-control']) !!}
</div>

<!-- City Field -->
<div class="form-group col-sm-6">
    {!! Form::label('city', 'City:') !!}
    {!! Form::text('city', null, ['class' => 'form-control']) !!}
</div>
<!-- Ad Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('ville_id', 'Ville Name:') !!}
    <select name="ville_id" id="ville_id" class="selectpicker form-control" data-live-search="true"
        @if(isset($bus)):
           disabled='true'
        @endif
     onchange="ChangeSecteurs()" required>
            @foreach($villes as $ville) 
      <option value='{!! $ville->id !!}' <?php if(isset($bus)): if ($ville->id == $bus->ville_id ): ?>
                     selected
                 <?php endif; endif; ?>>{!! $ville->name !!}</option>
            @endforeach
    </select>
</div>
<!--  secteur list  -->
<div class="col-sm-6">
    <div class="form-group">
        <label>Secteurs</label>
        <select id="secteurs" name="secteurs[]" class="form-control select2 select2-hidden-accessible" multiple="" data-placeholder="Choisir un secteur" style="width: 100%;" tabindex="-1" aria-hidden="true">
          
        </select>
      </div>
</div>
<div class="form-group col-sm-6">
    {!! Form::label('secteurs', 'Secteurs:') !!}
    {!! Form::text('secteurs', null, ['id'=> 'form-tags-2','class' => 'form-control']) !!}
</div>

<!-- User Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('user_id', 'User Id:') !!}
    {!! Form::number('user_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('buses.index') !!}" class="btn btn-default">Cancel</a>
</div>


<script type="text/javascript">
  var listSecteursVille = {};
  var i =0;
  <?php foreach ($villes as $ville): ?>
    <?php $myArray = explode(',', $ville->secteurs); ?>  
      listSecteursVille['{{$ville->id}}'] = [<?php foreach ($myArray as $key => $value) {
          echo "'".$value."',";
      } ?> ]; 
  <?php endforeach ?>;
$(function () {
    ChangeSecteurs(); //this calls it on load
    $("ville_id").change(ChangeSecteurs);
});
function ChangeSecteurs() {
    var villeList = document.getElementById("ville_id");
    var secteurList = document.getElementById("secteurs");
    var selcVille = villeList.options[villeList.selectedIndex].value;
    while (secteurList.options.length) {
        secteurList.remove(0);
    }
    var secteurs = listSecteursVille[selcVille];
    if (secteurs) {
        var i;
        for (i = 0; i < secteurs.length; i++) {
            var cat = new Option(secteurs[i], secteurs[i]);
            secteurList.options.add(cat);

           
        
            
            
        }
    }
}       

</script>