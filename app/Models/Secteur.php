<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Secteur
 * @package App\Models
 * @version December 31, 2018, 1:56 pm UTC
 *
 * @property \App\Models\Ville ville
 * @property \Illuminate\Database\Eloquent\Collection ads
 * @property \Illuminate\Database\Eloquent\Collection events
 * @property string secteur_name
 * @property integer ville_id
 */
class Secteur extends Model
{
    use SoftDeletes;

    public $table = 'secteurs';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];


    public $fillable = [
        'secteur_name',
        'ville_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'secteur_name' => 'string',
        'ville_id' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function ville()
    {
        return $this->belongsTo(\App\Models\Ville::class);
    }
}
