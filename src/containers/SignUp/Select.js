import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const Choices = [
    {
      value: 'education',
      label: 'آموزش و پژوهش',
    },
    {
      value: 'treatment',
      label: 'بهداشت و درمان',
    },
    {
      value: 'care',
      label: 'نگهداری و سرپرستی',
    },
    {
      value: 'structure',
      label: 'تجهیز و عمران',
    },
    {
      value: 'environment',
      label: 'محیط زیست و منابع طبیعی',
    },
    
  ];
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: "#F5F5F5",
    
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width : 100,
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)"
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 100,
  },
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();
  

  
  return (
    <div className={classes.container} noValidate autoComplete="off">
      <TextField
        name = {props.name}
        select
        label={props.label}
        className={classes.textField}
        value={props.value}
        onChange={props.change}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
      >
        {Choices.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      </div>
  );
}