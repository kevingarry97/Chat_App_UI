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
  pl_2: {
    paddingLeft: 10
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
  border_5: {
    borderRadius: '1.5em'
  },
  backgroud_light: {
    backgroundColor: '#F5F7FB',
    borderRadius: 10
  },
  background_primary: {
    backgroundColor: '#4E426D',
    borderRadius: 10,
    color: '#fff'
  },
  backgroud_lighter: {
    backgroundColor: '#F5F7FB'
  },
  mr_3: {
    paddingRight: 20
  },
  m_5: {
    margin: "0px 0px 30px 0px"
  },
  pr_3: {
    marginRight: 15
  },
  overlay: {
    position: 'absolute',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    opacity: 0.7,
    width: '100%',
    zIndex: 1
  },
  text_black: {
    color: "#000"
  }
}) 
