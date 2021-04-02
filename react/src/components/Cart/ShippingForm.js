import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const ShippingForm = props => {
  const { setShipping } = props
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='First name'
            fullWidth
            onChange={e =>
              setShipping(
                prev => new Map([...prev, ['firstname', e.target.value]])
              )
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Last name'
            fullWidth
            onChange={e =>
              setShipping(
                prev => new Map([...prev, ['lastname', e.target.value]])
              )
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='address1'
            name='address1'
            label='Address line 1'
            fullWidth
            onChange={e =>
              setShipping(
                prev => new Map([...prev, ['address', e.target.value]])
              )
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='city'
            name='city'
            label='City'
            fullWidth
            onChange={e =>
              setShipping(prev => new Map([...prev, ['city', e.target.value]]))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='state'
            name='state'
            label='State/Province/Region'
            fullWidth
            onChange={e =>
              setShipping(
                prev => new Map([...prev, ['province', e.target.value]])
              )
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='zip'
            name='zip'
            label='Zip / Postal code'
            fullWidth
            onChange={e =>
              setShipping(prev => new Map([...prev, ['zip', e.target.value]]))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='country'
            name='country'
            label='Country'
            fullWidth
            onChange={e =>
              setShipping(
                prev => new Map([...prev, ['country', e.target.value]])
              )
            }
          />
        </Grid>
      </Grid>
    </>
  )
}
export default ShippingForm
