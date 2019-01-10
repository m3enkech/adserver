<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Ville
 * @package App\Models
 * @version December 8, 2018, 9:14 am UTC
 *
 * @property \Illuminate\Database\Eloquent\Collection events
 * @property string name
 * @property text secteurs
 */
class Ville extends Model
{
    use SoftDeletes;

    public $table = 'villes';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];


    public $fillable = [
        'name',
        'secteurs'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'secteurs' => 'text',
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
