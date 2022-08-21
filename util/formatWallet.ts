export const formatWallet = (wallet: string): string => {
    return wallet.replace(/^(.{4})(?:\w+)(.{4})$/, '$1...$2');
}