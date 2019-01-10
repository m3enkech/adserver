<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class User
 * @package App\Models
 * @version December 8, 2018, 9:13 am UTC
 *
 * @property \App\Models\Role role
 * @property \Illuminate\Database\Eloquent\Collection Ad
 * @property \Illuminate\Database\Eloquent\Collection Bus
 * @property \Illuminate\Database\Eloquent\Collection Client
 * @property \Illuminate\Database\Eloquent\Collection EventBus
 * @property \Illuminate\Database\Eloquent\Collection EventVille
 * @property \Illuminate\Database\Eloquent\Collection Event
 * @property string companyName
 * @property string managerName
 * @property string phoneNumber
 * @property string mobileNumber
 * @property string address
 * @property string city
 * @property string accountType
 * @property string logo
 * @property string secteurActivite
 * @property string status
 * @property bigInteger accountCredit
 * @property integer role_id
 * @property string email
 * @property string password
 * @property string remember_token
 */
class User extends Model
{
    use SoftDeletes;

    public $table = 'users';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];


    public $fillable = [
        'companyName',
        'managerName',
        'phoneNumber',
        'mobileNumber',
        'address',
        'city',
        'accountType',
        'logo',
        'secteurActivite',
        'status',
        'accountCredit',
        'role_id',
        'email',
        'password',
        'remember_token'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'companyName' => 'string',
        'managerName' => 'string',
        'phoneNumber' => 'string',
        'mobileNumber' => 'string',
        'address' => 'string',
        'city' => 'string',
        'accountType' => 'string',
        'logo' => 'string',
        'secteurActivite' => 'string',
        'status' => 'string',
        'role_id' => 'integer',
        'email' => 'string',
        'password' => 'string',
        'remember_token' => 'string'
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
    public function role()
    {
        return $this->belongsTo(\App\Models\Role::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function ads()
    {
        return $this->hasMany(\App\Models\Ad::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function buses()
    {
        return $this->hasMany(\App\Models\Bus::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function clients()
    {
        return $this->hasMany(\App\Models\Client::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function eventBuses()
    {
        return $this->hasMany(\App\Models\EventBus::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function eventVilles()
    {
        return $this->hasMany(\App\Models\EventVille::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function events()
    {
        return $this->hasMany(\App\Models\Event::class);
    }
}
