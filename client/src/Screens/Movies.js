import { Card, CardMedia, Grid, Typography, Container } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState, useEffect } from 'react'
import axios from 'axios'
import MoviesCard from '../Components/moviesCard'
const Movies = () => {
    const [query, setQuery] = useState({
        pageSize: 4,
        page:1
    })
    const [movies, setMovies] = useState(null)
    const [totalCount, setTotalCount] = useState(null)
    useEffect(() => {
        getMovies()
    }, [query])
    const getMovies = async () => {
        try {
            const response = await axios.post("http://localhost:4000/api/user/viewMovie",query)
            setMovies(response.data.users)
            setTotalCount(Math.ceil(response.data.total / query.pageSize));

        }
        catch (error) {
            alert(error)
        }

    }
    return (
        <Container maxWidth="lg" style={{ paddingTop: 30 ,display:'flex',justifyContent:'center',flexDirection:'column'}}>
            <Typography variant='h4' style={{margin:50}} align='center'>Movies List</Typography>
            <Grid container spacing={3} justify="center">
                {movies != null
                    ?
                    <>
                        {movies.length === 0
                            ?
                            <Typography>No Movies There</Typography>
                            :
                            <>
                                {movies.map((item) =>
                                    <MoviesCard {...item} />

                                )
                                }
                                {totalCount ?
                                    <Grid item xs={12} sm={12} lg={12} md={12} container justify='center' >

                                        <Pagination
                                            style={{ marginTop: '50px', marginBottom: '20px' }}
                                            showFirstButton
                                            showLastButton
                                            count={totalCount}
                                            page={query.page}
                                            onChange={(e, value) => {
                                                setQuery({
                                                    ...query,
                                                    page: value 
                                                })
                                            }}
                                            color="primary" />
                                    </Grid>
                                    : ""
                                }

                            </>
                        }
                    </>
                    : <CircularProgress />
                }

            </Grid>
        </Container>

    )
}
export default Movies