import { IFee } from './IFee';

export class AddRemissionRequest {
  beneficiary_name: string;
  ccd_case_number: string;
  fee: IFee;
  hwf_amount: number;
  hwf_reference: string;
  payment_group_reference: string;
  site_id = 'AA02';

  constructor(ccd_case_number: string, fee: IFee, hwf_amount: number, hwf_reference: string) {
    this.ccd_case_number = ccd_case_number;
    this.fee = fee;
    this.hwf_amount = hwf_amount;
    this.hwf_reference = hwf_reference;
  }
}
