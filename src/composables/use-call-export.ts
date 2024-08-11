import { useEventBus } from "@vueuse/core";

const useCallExportToPNG = useEventBus('export-to-png')

export {
  useCallExportToPNG
}