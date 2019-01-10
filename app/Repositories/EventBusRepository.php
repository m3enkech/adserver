<?php

namespace App\Repositories;

use App\Models\EventBus;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class EventBusRepository
 * @package App\Repositories
 * @version December 8, 2018, 9:59 am UTC
 *
 * @method EventBus findWithoutFail($id, $columns = ['*'])
 * @method EventBus find($id, $columns = ['*'])
 * @method EventBus first($columns = ['*'])
*/
class EventBusRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'date_diffusion',
        'heure_diffusion_debut',
        'heure_diffusion_fin',
        'user_id',
        'event_id',
        'bus_id',
        'ville_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return EventBus::class;
    }
}
