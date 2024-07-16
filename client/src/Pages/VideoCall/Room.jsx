import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRAT } from './constant';

const Room = () => {
  const { id } = useParams();
  const roomID = id;

  useEffect(() => {
    const myMeeting = async (element) => {
      try {
        // Generate Kit Token
        const appID = APP_ID;
        const serverSecret = SERVER_SECRAT;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "JOIN WITH H.K");

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // Start the call
        zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'Personal link',
              url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
        });
      } catch (error) {
        console.error('Error joining room:', error);
        // Handle error as needed (e.g., show an error message)
      }
    };

    // Call myMeeting function
    const element = document.getElementById('meeting-container');
    if (element) {
      myMeeting(element);
    } else {
      console.error('Meeting container element not found.');
    }
  }, [roomID]);

  return <div id="meeting-container"></div>;
};

export default Room;
