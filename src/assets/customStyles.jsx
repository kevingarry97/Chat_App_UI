import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  flex: {
    display: 'flex',
    width: '100%'
  },
  h_100: {
    height: '90vh'
  },
  flex_column: {
    flexDirection: 'column',
  },
  flex_row: {
    flexDirection: 'row'
  },
  align_center: {
    alignItems: 'center'
  },
  justify_center: {
    justifyItems: 'center'
  },
  align_end: {
    alignItems: 'end'
  },
  align_start: {
    alignItems: 'start',
    // backgroundColor: '#4E426D'
  },
  justify_between: {
    justifyContent: 'space-around'
  },
  pt_5: {
    paddingTop: '45px'
  },
  p_5: {
    paddingLeft: '10px',
    paddingRight: '10px',
    margin: '10px'
  },
  pb_5: {
    paddingBottom: '45px'
  },
  py_2: {
    paddingTop: "20px"
  },
  w_100: {
    width: "100%"
  },
  text_muted: {
    color: "#C2C1C5"
  },
  float_right: {
    float: 'right',
    marginBottom: 20
  },
  decoration_0: {
    textDecoration: 'none'
  },
  img_fluid: {
    width: '100%'
  },
  text_normal: {
    fontWeight: 'normal',
    fontSize: 22
  },
  border_bottom: {
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid'
  },
  form_control: {
    display: 'block',
    width: '98%',
    height: 'calc(1.5em + .75rem + 2px)',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border:' 1px solid #fff',
    borderRadius: '5rem'
  },
  backgroud_light: {
    backgroundColor: '#F5F7FB'
  }
}) 
