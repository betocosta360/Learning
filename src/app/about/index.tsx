import * as React from 'react';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

export default function About() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores accusamus nesciunt corporis, fugit reiciendis delectus exercitationem!
            Voluptate reprehenderit quisquam consectetur ut, sit
            possimus cum mollitia itaque.
            Rem ducimus quos molestias.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Sobre Nós
      </Button>
    </PaperProvider>
  );
};

