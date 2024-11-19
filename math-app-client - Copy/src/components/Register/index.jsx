
import { Box, Button, TextField, Typography } from "@mui/material"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReactImage from '../../assets/super-kid.png';
import Quote1 from '../../assets/quote1.png';
import Quote2 from '../../assets/quote2.png';

function Register() {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        }),
        onSubmit: values => {
            // Handle form submission
            console.log(values);
        },
    });
    

    const _handleEmailChange = (e) => {
        formik.setFieldError('email', '');
        formik.setFieldValue('email', e.target.value,false);
    }

    const _handlePasswordChange = (e) => {
        formik.setFieldError('password', '');
        formik.setFieldValue('password', e.target.value,false);
    }

  return (
    <Box component='form' onSubmit={formik.handleSubmit} width='100%' minHeight='100vh' bgcolor='white' display='flex' alignItems='center' justifyContent='center'>
        <Box width='800px' height='500px' bgcolor='white' border={2} borderRadius={2} borderColor='primary.main' display='flex' >
            <Box width='50%' height='100%' p={5} display='flex' flexDirection='column' gap={5} justifyContent='center'>
                <Box mb={3} margin={1}>
                    <Typography variant='h5' textAlign='center' fontWeight={600}>
                        Register
                    </Typography>
                    <Typography variant='subtitle1' color='gray' textAlign='center' fontWeight={500}>
                        Register to your accsess your dashboard
                    </Typography>
                </Box>
                <Box height={50}>
                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        label='Full Name'
                        value={formik.values.name}
                        onChange={_handleEmailChange}
                        error={!!formik.errors.name}
                        helperText={formik.errors.name}
                    />
                </Box>
                <Box height={50}>
                    <TextField
                        fullWidth
                        id='email'
                        name='email'
                        label='Email'
                        value={formik.values.email}
                        onChange={_handleEmailChange}
                        error={!!formik.errors.email}
                        helperText={formik.errors.email}
                    />
                </Box>
                <Box height={50}>
                    <TextField
                        fullWidth
                        id='password'
                        name='password'
                        label='Password'
                        type='password'
                        value={formik.values.password}
                        onChange={_handlePasswordChange}
                        error={!!formik.errors.password}
                        helperText={formik.errors.password}
                    />
                </Box>
                <Box display='flex' flexDirection='column' gap={1}>
                    <Button color='primary' variant='contained' fullWidth type='submit' sx={{ mt: 3 }}>
                        Register
                    </Button>
                </Box>
            </Box>
            <Box width='50%' height='100%' display='flex' alignItems='center' justifyContent='center' position='relative'>  
                <Box
                    position='absolute'
                    component="img"
                    src={Quote1}
                    alt="Sign In Image"
                    width="70px"
                    height="auto" 
                    top={90}
                    right={70}
                />
                <Box
                    component="img"
                    src={ReactImage}
                    alt="Sign In Image"
                    width="100%"
                    height="auto" 
                />
                <Box
                    position='absolute'
                    component="img"
                    src={Quote2}
                    alt="Sign In Image"
                    width="70px"
                    height="auto"
                    bottom={50}
                    left={70} 
                />
                </Box>
        </Box>
    </Box>
  )
}

export default Register