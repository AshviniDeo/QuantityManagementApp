const MeterToMeter = value => value;
const MeterToKilometer = value => value / 1000;
const MeterToCentimeter = value => value * 100;
const MeterToFoot = value => value * 3.281;
const MeterToInch = value => value * 39.37;
const KilometerToMeter = value => value * 1000;
const KilometerToKilometer = value => value;
const KilometerToCentimeter = value => value * 100000;
const KilometerToFoot = value => value * 3281;
const KilometerToInch = value => value * 39370;
const CentimeterToMeter = value => value / 100;
const CentimeterToKilometer = value => value / 100000;
const CentimeterToCentimeter = value => value;
const CentimeterToFoot = value => value / 30.48;
const CentimeterToInch = value => value / 2.54;
const FootToMeter = value => value / 3.281;
const FootToKilometer = value => value / 3281;
const FootToCentimeter = value => value * 30.48;
const FootToFoot = value => value;
const FootToInch = value => value * 12;
const InchToMeter = value => value / 39.37;
const InchToKilometer = value => value / 39370;
const InchToCentimeter = value => value * 2.54;
const InchToFoot = value => value / 12;
const InchToInch = value => value;

export const lengthFunction = {
  MeterToCentimeter,
  MeterToFoot,
  MeterToInch,
  MeterToKilometer,
  MeterToMeter,
  KilometerToCentimeter,
  KilometerToFoot,
  KilometerToInch,
  KilometerToMeter,
  KilometerToKilometer,
  CentimeterToCentimeter,
  CentimeterToFoot,
  CentimeterToInch,
  CentimeterToKilometer,
  CentimeterToMeter,
  FootToFoot,
  FootToInch,
  FootToKilometer,
  FootToMeter,
  FootToCentimeter,
  InchToCentimeter,
  InchToFoot,
  InchToKilometer,
  InchToMeter,
  InchToInch,
};
