import { TextField, Container, makeStyles, Grid, Button,Typography,Paper} from '@material-ui/core'
import { useState, useEffect } from 'react'
import {CircularProgress} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import app from '../base'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column'

    }


}))
const Home = () => {
    const history=useHistory()
    const data = {
        name: '',
        release: null,
        language: '',
        image: '',
        video: ''
    }
    const [fileUploadStatus, setFileUploadStatus] = useState(false)
    const [videoUploadStatus, setVideoUploadStatus] = useState(false)
    const [file, setFile] = useState(null)
    const [videoFile, setVideoFile] = useState({})
    useEffect(() => {
        if (file != null)
            app.storage().ref('image').child(file.name).getDownloadURL().then((downloadURL) => setMovieData({ ...movieData, image: downloadURL }))
    }, [file])
    useEffect(() => {
        if (file != null)
            app.storage().ref('video').child(videoFile.name).getDownloadURL().then((downloadURL) => setMovieData({ ...movieData, video: downloadURL }))
    }, [videoFile])
    const [movieData, setMovieData] = useState(data)
    const handleUploadImage = (e) => {
         
         if(e.target.files[0].type.endsWith('jpeg') || e.target.files[0].type.endsWith('jpg')|| e.target.files[0].type.endsWith('png') )
         {
             setFileUploadStatus(true)
        app.storage().ref("image").child(e.target.files[0].name).put(e.target.files[0])
            .then((snapshot) => {
                setFile(e.target.files[0])
                setFileUploadStatus(false)
            });
        }
        else
        alert("Please upload image with extension jpeg,jpg or png")

    }
    const handleUploadVideo = (e) => {
        if(e.target.files[0].type.endsWith('mp4'))
        {
         setVideoUploadStatus(true)
        app.storage().ref("video").child(e.target.files[0].name).put(e.target.files[0])
            .then((snapshot) => {
               
                setVideoFile(e.target.files[0])
                setVideoUploadStatus(false)
            });
        }
        else
        alert("Please upload video with extension mp4")


    }
    const handleSubmit = async () => {
        if(movieData.name===''||movieData.release===''||movieData.image===''||movieData.video===''||movieData.language==='')
        alert("Please fill all required field")
        try {
            await axios.post('http://localhost:4000/api/user/register', movieData)
            setMovieData("")
            history.push('/movies')
        }
        catch (error) {
            alert(error)
        }
    }
    const today=new Date();
  const currentDate=`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
    const classes = useStyles()
    return (
        <Container maxWidth="md" className={classes.root}>
            <Typography variant='h5'>Movie Data</Typography>
            <Paper elevation={2} style={{padding:30,margin:10}}>
            <Grid container spacing={3} lg={12}>
                <Grid item xs={12} sm={12} lg={12} xl={12}>
                    <TextField
                    id='release'
                        fullWidth
                        required
                        variant='standard'
                        label='Movie Name'
                       
                        value={movieData.name}
                        onChange={(e) => {
                            setMovieData({ ...movieData, name: e.target.value })
                        }}
                        
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={12} xl={12}>
                    <TextField
                        fullWidth
                        required
                        id='release'
                         defaultValue={currentDate}
                        label='Release Date'
                        type='date'
                        variant='standard'
                        value={movieData.release}
                        onChange={(e) => {
                            setMovieData({ ...movieData, release: e.target.value })
                        }}
                    />

                </Grid>
                <Grid item xs={12} sm={12} lg={12} xl={12}>
                    <TextField
                        fullWidth
                        required
                        variant='standard'
                        label='Language'
                        value={movieData.language}
                        onChange={(e) => {
                            setMovieData({ ...movieData, language: e.target.value })
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={12} xl={12} md={12}container spacing={1} >
                     <Grid item xs={12} sm={12} lg={4} xl={4} md={4} container  alignItems="center">
                     <Typography variant="h6">Thumbnail</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4} xl={4} md={4} container  alignItems="center">
                    <label htmlFor="btn-upload">
                        <input
                            id="btn-upload"
                            name="btn-upload"
                            style={{ display: 'none' }}
                            type="file"

                            onChange={handleUploadImage}
                        />
                             
                        <Button
                           disabled={fileUploadStatus}
                            className="btn-choose"
                            variant="contained"
                            component="span"
                            color="primary" >
                            Upload Image
                        </Button>
                        
                    </label>
                    </Grid>
                      <Grid item xs={12} sm={12} lg={4} xl={4} md={4}  container  alignItems="center">
                    {fileUploadStatus ?
                        <CircularProgress />
                        :
                        fileUploadStatus === false &&
                       movieData.image !== '' && (
                        <Alert severity="success">Image uploaded Successfully!</Alert>
)}
                        </Grid>
                </Grid>

                 <Grid item xs={12} sm={12} lg={12} xl={12} md={12}container spacing={1} >
                     <Grid item xs={12} sm={12} lg={4} xl={4} md={4} container  alignItems="center">
                    <Typography variant="h6">Video</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4} xl={4} md={4} container  alignItems="center">
                    <label htmlFor="btn-video-upload">
                        <input
                            id="btn-video-upload"
                            name="btn-upload"
                            style={{ display: 'none' }}
                            type="file"

                            onChange={handleUploadVideo}
                        />
                             
                        <Button
                              disabled={videoUploadStatus}
                            className="btn-choose"
                            variant="contained"
                            component="span"
                            color="primary" >
                            Upload Video
                        </Button>
                        
                    </label>
                    </Grid>
                      <Grid item xs={12} sm={12} lg={4} xl={4} md={4}  container  alignItems="center">
                    {videoUploadStatus ?
                        <CircularProgress />
                        :
                        videoUploadStatus === false &&
                       movieData.video !== '' && (
                        <Alert severity="success">Video Uploaded Successfully!</Alert>
)}
                        </Grid>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} xl={12} container justify='center'>
                    <Button
                      
                        variant='contained'
                        color='primary'
                        onClick={handleSubmit}>
                        Submit

                    </Button>
                </Grid>

            </Grid>
            </Paper>
        </Container>
    )
}
export default Home