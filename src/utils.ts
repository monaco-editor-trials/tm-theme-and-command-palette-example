export default class CommonUtils {
  public static async loadOnigurumaWASM(): Promise<ArrayBuffer | null> {
    const response = await fetch(
      'https://cdn.jsdelivr.net/npm/onigasm@latest/lib/onigasm.wasm' // use for web (to prevent CORS etc.)
      // 'onigasm/lib/onigasm.wasm' // use on your local
    );

    if (
      response.status !== 200 ||
      response.headers.get('content-type') !== 'application/wasm'
    ) {
      return null;
    }

    return await response.arrayBuffer();
  }
}
