import React from 'react'
import '../stylesheets/donate.css'

const Donate = () => {
  return(
    <div className="content">
      <h1 className="title">Donate</h1>
      <p>We are a voluntary, not-for-profit organisation. In order for us to continue our classes, we welcome any contributions.</p>
      <p>You can opt to contribute via a <b>one-off</b>&nbsp;or a <b>monthly</b> donation.</p>
      <p>Thank you for your support.</p>
      <p><i>Please note, PayPal will charge higher processing fees for donations made through credit cards, it is therefore recommended to use debit card or direct bank transfer.</i></p>

      <div className='donate__cta'>
        <button><a className='btn--donate' href='https://www.paypal.com/donate?hosted_button_id=RSJYDS2ZJDVGU' target='_blank'>Donate</a></button>
        <img className='img--paypal' src='images/paypal.png' alt='Pay Pal' />
      </div>

      <h3>Donate via online banking</h3><br/>
      <table>
        <tr>
          <td>Account</td>
          <td>Hindu Youth Association</td>
        </tr>
        <tr>
          <td>A/C no</td>
          <td>64283224</td>
        </tr>
        <tr>
          <td>Sort code</td>
          <td>60-24-26</td>
        </tr>
      </table>

      <p>For the payment reference, please use your <b>FIRSTNAME_SURNAME_POSTCODE</b></p>
      <br/>
      <h3>Gift Aid</h3>
      <p>If you are a UK tax payer, please complete the <a href='../forms/gift-aid-declaration.pdf' target='_blank'>Gift Aid Form</a> and send it to <a href='mailto:info@hyauk.org' target='_blank'>info@hyauk.org</a>. This will allow us to claim back gift aid for all your donations.</p>
    </div>
  )
}

export default Donate;
