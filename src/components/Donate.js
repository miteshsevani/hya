import React from 'react'
import '../stylesheets/donate.css'

const Donate = () => {
  return(
    <div className="content">
      <h1 className="title">Donate</h1><br/>
      <h3>Donate securely via PayPal</h3>
      <p>We are a voluntary, not-for-profit organisation. In order for us to continue our classes, we welcome any contributions.</p>
      <p>You can opt to contribute via a <b>one-off</b>&nbsp;or a <b>monthly</b> donation.</p>
      <p>If you are a UK tax payer, ensure you tick the option to apply <b>Gift Aid</b>. This will be displayed PayPal's donate page.</p>
      <p>Thank you for your support.</p>
      <p><i>Please note, PayPal will charge higher processing fees for donations made through credit cards, it is therefore recommended to use debit card or direct bank transfer.</i></p>

      <div className='donate__cta'>
        <button><a className='btn--donate' href='https://www.paypal.com/donate?hosted_button_id=RSJYDS2ZJDVGU' target='_blank'>Donate</a></button>
        <img className='img--paypal' src='images/paypal.png' alt='Pay Pal' />
      </div>

      <p>If you wish to donate in any other way other than PayPal, please contact us at <a href='mailto:info@hyauk.org' target='_blank'>info@hyauk.org</a></p>
    </div>
  )
}

export default Donate;
