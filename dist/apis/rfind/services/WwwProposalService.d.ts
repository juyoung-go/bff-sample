export default class WwwProposalService {
    getPrdProposal(prdId: string): Promise<string>;
    getWwwPrdCompareProposal(markers: string[], scale: string, h: string, w: string, center?: string, level?: string): Promise<string[]>;
    getPrdCompareProposal(prdId?: string[]): Promise<string>;
}
