export class SSRCheck {
    public static hasSSRRendered(): boolean {
        return typeof window !== 'undefined' && typeof window.document !== 'undefined';
    }
}