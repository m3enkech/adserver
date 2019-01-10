<?php

namespace App\Repositories;

use App\Models\Event;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class EventRepository
 * @package App\Repositories
 * @version December 8, 2018, 9:59 am UTC
 *
 * @method Event findWithoutFail($id, $columns = ['*'])
 * @method Event find($id, $columns = ['*'])
 * @method Event first($columns = ['*'])
*/
class EventRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'title',
        'url',
        'exclusivity',
        'ad_id',
        'user_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Event::class;
    }
}
