<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSecteurRequest;
use App\Http\Requests\UpdateSecteurRequest;
use App\Repositories\SecteurRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class SecteurController extends AppBaseController
{
    /** @var  SecteurRepository */
    private $secteurRepository;

    public function __construct(SecteurRepository $secteurRepo)
    {
        $this->secteurRepository = $secteurRepo;
    }

    /**
     * Display a listing of the Secteur.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->secteurRepository->pushCriteria(new RequestCriteria($request));
        $secteurs = $this->secteurRepository->all();

        return view('secteurs.index')
            ->with('secteurs', $secteurs);
    }

    /**
     * Show the form for creating a new Secteur.
     *
     * @return Response
     */
    public function create()
    {
        return view('secteurs.create');
    }

    /**
     * Store a newly created Secteur in storage.
     *
     * @param CreateSecteurRequest $request
     *
     * @return Response
     */
    public function store(CreateSecteurRequest $request)
    {
        $input = $request->all();

        $secteur = $this->secteurRepository->create($input);

        Flash::success('Secteur saved successfully.');

        return redirect(route('secteurs.index'));
    }

    /**
     * Display the specified Secteur.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $secteur = $this->secteurRepository->findWithoutFail($id);

        if (empty($secteur)) {
            Flash::error('Secteur not found');

            return redirect(route('secteurs.index'));
        }

        return view('secteurs.show')->with('secteur', $secteur);
    }

    /**
     * Show the form for editing the specified Secteur.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $secteur = $this->secteurRepository->findWithoutFail($id);

        if (empty($secteur)) {
            Flash::error('Secteur not found');

            return redirect(route('secteurs.index'));
        }

        return view('secteurs.edit')->with('secteur', $secteur);
    }

    /**
     * Update the specified Secteur in storage.
     *
     * @param  int              $id
     * @param UpdateSecteurRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateSecteurRequest $request)
    {
        $secteur = $this->secteurRepository->findWithoutFail($id);

        if (empty($secteur)) {
            Flash::error('Secteur not found');

            return redirect(route('secteurs.index'));
        }

        $secteur = $this->secteurRepository->update($request->all(), $id);

        Flash::success('Secteur updated successfully.');

        return redirect(route('secteurs.index'));
    }

    /**
     * Remove the specified Secteur from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $secteur = $this->secteurRepository->findWithoutFail($id);

        if (empty($secteur)) {
            Flash::error('Secteur not found');

            return redirect(route('secteurs.index'));
        }

        $this->secteurRepository->delete($id);

        Flash::success('Secteur deleted successfully.');

        return redirect(route('secteurs.index'));
    }
}
