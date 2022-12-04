import { Container } from "react-bootstrap";
import { INavbar } from "../components/navbat";
import { RecordView } from "../components/views/recordsView";

export const RecordPage = ():React.ReactElement => {

    return (
        <>
            <INavbar />
            <Container>
                <RecordView />
            </Container>
        </>
        
    );
  
}