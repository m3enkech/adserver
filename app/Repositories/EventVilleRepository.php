<?php

namespace App\Repositories;

use App\Models\EventVille;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class EventVilleRepository
 * @package App\Repositories
 * @version December 7, 2018, 4:50 pm UTC
 *
 * @method EventVille findWithoutFail($id, $columns = ['*'])
 * @method EventVille find($id, $columns = ['*'])
 * @method EventVille first($columns = ['*'])
*/
class EventVilleRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'user_id',
        'event_id',
        'bus_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return EventVille::class;
    }
}
