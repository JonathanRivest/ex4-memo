import './Tache.scss';
import formaterDateEtHeure from '../services/utilitaires';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Tache({id, texte, completee, date, supprimerTache, basculerTache}) {
  return (
    <div className="Tache">
      <IconButton
        size="small"
        color="primary"
        title="Cliquez pour marquer cette tâche complétée" 
        onClick={() => basculerTache(completee) }
      >
        <DoneIcon />
      </IconButton>
      <span className="texte">{texte}</span>
      <span className="date">({formaterDateEtHeure(date)})</span>
      <IconButton
        size="small"
        color="primary"
        title="Supprimer cette tâche" 
        onClick={() => supprimerTache(id) }
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}