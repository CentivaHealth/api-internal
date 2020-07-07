// package: health.centiva.api
// file: hit-utils/proto/api-internal/covid19_daily_report.proto

import * as jspb from "google-protobuf";

export class Covid19DailyReportRequest extends jspb.Message {
  getPubKey(): string;
  setPubKey(value: string): void;

  getAuthToken(): string;
  setAuthToken(value: string): void;

  getSignature(): string;
  setSignature(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getGender(): Covid19DailyReportRequest.GenderMap[keyof Covid19DailyReportRequest.GenderMap];
  setGender(value: Covid19DailyReportRequest.GenderMap[keyof Covid19DailyReportRequest.GenderMap]): void;

  getAgeBracket(): number;
  setAgeBracket(value: number): void;

  getBracketSizeYears(): number;
  setBracketSizeYears(value: number): void;

  getTestPerformed(): boolean;
  setTestPerformed(value: boolean): void;

  getTestOutcomeKnown(): boolean;
  setTestOutcomeKnown(value: boolean): void;

  getTestOutcome(): boolean;
  setTestOutcome(value: boolean): void;

  getFever(): boolean;
  setFever(value: boolean): void;

  getCoughSoreThroatOrShortnessOfBreath(): boolean;
  setCoughSoreThroatOrShortnessOfBreath(value: boolean): void;

  getMuscleAche(): boolean;
  setMuscleAche(value: boolean): void;

  getLossOfSmellOrTaste(): boolean;
  setLossOfSmellOrTaste(value: boolean): void;

  getHeadache(): boolean;
  setHeadache(value: boolean): void;

  getDiarrhea(): boolean;
  setDiarrhea(value: boolean): void;

  getConjunctivitis(): boolean;
  setConjunctivitis(value: boolean): void;

  getHeadCold(): boolean;
  setHeadCold(value: boolean): void;

  getOtherSymptom(): string;
  setOtherSymptom(value: string): void;

  getOnMedsHypertension(): boolean;
  setOnMedsHypertension(value: boolean): void;

  getOnMedsDiabetes(): boolean;
  setOnMedsDiabetes(value: boolean): void;

  getChronicRespiratoryIssues(): boolean;
  setChronicRespiratoryIssues(value: boolean): void;

  getOnMedsImmunosuppression(): boolean;
  setOnMedsImmunosuppression(value: boolean): void;

  getChemoOrRadioTherapy(): boolean;
  setChemoOrRadioTherapy(value: boolean): void;

  getOtherSpecifiedHealthCondition(): boolean;
  setOtherSpecifiedHealthCondition(value: boolean): void;

  getProximity(): boolean;
  setProximity(value: boolean): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  getPlaceName(): string;
  setPlaceName(value: string): void;

  getPostCode(): string;
  setPostCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Covid19DailyReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: Covid19DailyReportRequest): Covid19DailyReportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Covid19DailyReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Covid19DailyReportRequest;
  static deserializeBinaryFromReader(message: Covid19DailyReportRequest, reader: jspb.BinaryReader): Covid19DailyReportRequest;
}

export namespace Covid19DailyReportRequest {
  export type AsObject = {
    pubKey: string,
    authToken: string,
    signature: string,
    languageCode: string,
    gender: Covid19DailyReportRequest.GenderMap[keyof Covid19DailyReportRequest.GenderMap],
    ageBracket: number,
    bracketSizeYears: number,
    testPerformed: boolean,
    testOutcomeKnown: boolean,
    testOutcome: boolean,
    fever: boolean,
    coughSoreThroatOrShortnessOfBreath: boolean,
    muscleAche: boolean,
    lossOfSmellOrTaste: boolean,
    headache: boolean,
    diarrhea: boolean,
    conjunctivitis: boolean,
    headCold: boolean,
    otherSymptom: string,
    onMedsHypertension: boolean,
    onMedsDiabetes: boolean,
    chronicRespiratoryIssues: boolean,
    onMedsImmunosuppression: boolean,
    chemoOrRadioTherapy: boolean,
    otherSpecifiedHealthCondition: boolean,
    proximity: boolean,
    countryCode: string,
    placeName: string,
    postCode: string,
  }

  export interface GenderMap {
    GENDER_UNSPECIFIED: 0;
    GENDER_MALE: 1;
    GENDER_FEMALE: 2;
    GENDER_OTHER: 3;
  }

  export const Gender: GenderMap;
}

export class Covid19DailyReportResponse extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Covid19DailyReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: Covid19DailyReportResponse): Covid19DailyReportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Covid19DailyReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Covid19DailyReportResponse;
  static deserializeBinaryFromReader(message: Covid19DailyReportResponse, reader: jspb.BinaryReader): Covid19DailyReportResponse;
}

export namespace Covid19DailyReportResponse {
  export type AsObject = {
    ok: boolean,
    error: string,
  }
}

