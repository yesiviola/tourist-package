import { styled  } from "@mui/system";

const LayoutRoot = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        minHeight: '100vh', 
        margin: theme.spacing(2)

}));

const Layout = ({children}) => {
  return (
    <LayoutRoot>
        {children}
    </LayoutRoot>
  )
}

export default Layout


