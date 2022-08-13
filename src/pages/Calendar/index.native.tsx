import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Container, Paragraph, TextInput } from "./styles.native";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const handleOnChangePicker = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    const currentDate = selectedDate || date;
    if (event.type === "neutralButtonPressed") {
      setDate(new Date(0));
    } else {
      setDate(currentDate);
    }
    setShow(false);
  };

  return (
    <Container>
      <Paragraph>Calendário:</Paragraph>
      {show && <DateTimePicker onChange={handleOnChangePicker} value={date} />}
      <TextInput
        onTouchStart={() => setShow(true)}
        value={date.toString()}
        showSoftInputOnFocus={false}
      />
    </Container>
  );
}
