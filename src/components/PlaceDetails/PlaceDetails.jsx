import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from "@material-ui/lab/Rating";

import useStyles from './styles';
const imgurl = process.env.IMG_URL;
const PlaceDetails = ({ place ,selected,refProp}) => {
    const classes = useStyles();
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : imgurl}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
                <Box justifyContent='space-between' display='flex'>
                    <Rating name="size-small" defaultValue={place.rating} size="small" />
                    <Typography variant="subtitle0">{place.num_reviews} Reviews</Typography>
                </Box>
                
                <Box justifyContent='space-between' display='flex'>
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box justifyContent='space-between' display='flex'>
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                    <img src={award.images.small} />
                    <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                </Box>
                ))}
                
                {
                    place?.cuisine?.map((cu) => (
                        
                           
                        <Chip key={cu.name} label={cu.name} size='small' className={ classes.chip} />
                            
                            
                       
                    ))
                }

                {
                    place?.address && (
                        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                            <LocationOnIcon/>{place.address}
                        </Typography>
                    )
                }
                {
                    place?.phone && (
                        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                            <PhoneIcon/>{place.phone}
                        </Typography>
                    )
                }
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                Website
                </Button>
            </CardActions>
            
        </Card>
    );
}

export default PlaceDetails;