import React from "react";
import * as Components from "./styles";

function Transactions() {
  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Receive</Components.Title>
          <Components.Input type="text" placeholder="To..." />
          <Components.Input type="text" placeholder="From..." />
          <Components.Input type="number" placeholder="Amount" />
          <Components.Button>Ask to Receive</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Send</Components.Title>
          <Components.Input type="text" placeholder="To..." />
          <Components.Input type="text" placeholder="From..." disabled />
          <Components.Input type="number" placeholder="Amount" />
          <Components.Button>Send</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              Want to send some amount ?
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Send
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Want to receive some amount ? Follow me!!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Receive
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default Transactions;
