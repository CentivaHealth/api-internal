// package: health.centiva.api
// file: hit-utils/proto/api-internal/covid19_test_report.proto

import * as jspb from "google-protobuf";

export class Covid19TestReportRequest extends jspb.Message {
  getPubKey(): string;
  setPubKey(value: string): void;

  getAuthToken(): string;
  setAuthToken(value: string): void;

  getSignature(): string;
  setSignature(value: string): void;

  getCountryCode(): string;
  setCountryCode(value: string): void;

  getPlace(): string;
  setPlace(value: string): void;

  getPostCode(): string;
  setPostCode(value: string): void;

  getVerificationCode(): string;
  setVerificationCode(value: string): void;

  getGender(): Covid19TestReportRequest.GenderMap[keyof Covid19TestReportRequest.GenderMap];
  setGender(value: Covid19TestReportRequest.GenderMap[keyof Covid19TestReportRequest.GenderMap]): void;

  getAgeBracket(): number;
  setAgeBracket(value: number): void;

  getBracketSizeYears(): number;
  setBracketSizeYears(value: number): void;

  getTestDate(): number;
  setTestDate(value: number): void;

  getResultDate(): number;
  setResultDate(value: number): void;

  getOutcome(): boolean;
  setOutcome(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Covid19TestReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: Covid19TestReportRequest): Covid19TestReportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Covid19TestReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Covid19TestReportRequest;
  static deserializeBinaryFromReader(message: Covid19TestReportRequest, reader: jspb.BinaryReader): Covid19TestReportRequest;
}

export namespace Covid19TestReportRequest {
  export type AsObject = {
    pubKey: string,
    authToken: string,
    signature: string,
    countryCode: string,
    place: string,
    postCode: string,
    verificationCode: string,
    gender: Covid19TestReportRequest.GenderMap[keyof Covid19TestReportRequest.GenderMap],
    ageBracket: number,
    bracketSizeYears: number,
    testDate: number,
    resultDate: number,
    outcome: boolean,
  }

  export interface GenderMap {
    GENDER_UNSPECIFIED: 0;
    GENDER_MALE: 1;
    GENDER_FEMALE: 2;
    GENDER_OTHER: 3;
  }

  export const Gender: GenderMap;
}

export class Covid19TestReportResponse extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Covid19TestReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: Covid19TestReportResponse): Covid19TestReportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Covid19TestReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Covid19TestReportResponse;
  static deserializeBinaryFromReader(message: Covid19TestReportResponse, reader: jspb.BinaryReader): Covid19TestReportResponse;
}

export namespace Covid19TestReportResponse {
  export type AsObject = {
    ok: boolean,
    error: string,
  }
}

