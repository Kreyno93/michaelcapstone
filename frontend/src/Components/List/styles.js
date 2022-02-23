import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    formControl: {
        margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    container: {
        padding: '25px',
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '85vh', overflow: 'auto', marginTop:"1rem"
    },
}));