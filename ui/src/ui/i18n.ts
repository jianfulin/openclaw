
export type Language = 'en' | 'zh-TW';

export interface Translations {
  nav: {
    chat: string;
    control: string;
    agent: string;
    settings: string;
  };
  tabs: {
    overview: string;
    channels: string;
    instances: string;
    sessions: string;
    cron: string;
    skills: string;
    nodes: string;
    chat: string;
    config: string;
    debug: string;
    logs: string;
  };
  subtitles: {
    overview: string;
    channels: string;
    instances: string;
    sessions: string;
    cron: string;
    skills: string;
    nodes: string;
    chat: string;
    config: string;
    debug: string;
    logs: string;
  };
  common: {
    n_a: string;
    connected: string;
    disconnected: string;
    loading: string;
    save: string;
    cancel: string;
    delete: string;
    enabled: string;
    disabled: string;
  };
}

export const DICTIONARY: Record<Language, Translations> = {
  'en': {
    nav: {
      chat: "Chat",
      control: "Control",
      agent: "Agent",
      settings: "Settings",
    },
    tabs: {
      overview: "Overview",
      channels: "Channels",
      instances: "Instances",
      sessions: "Sessions",
      cron: "Cron Jobs",
      skills: "Skills",
      nodes: "Nodes",
      chat: "Chat",
      config: "Config",
      debug: "Debug",
      logs: "Logs",
    },
    subtitles: {
      overview: "Gateway status, entry points, and a fast health read.",
      channels: "Manage channels and settings.",
      instances: "Presence beacons from connected clients and nodes.",
      sessions: "Inspect active sessions and adjust per-session defaults.",
      cron: "Schedule wakeups and recurring agent runs.",
      skills: "Manage skill availability and API key injection.",
      nodes: "Paired devices, capabilities, and command exposure.",
      chat: "Direct gateway chat session for quick interventions.",
      config: "Edit config files safely.",
      debug: "Gateway snapshots, events, and manual RPC calls.",
      logs: "Live tail of the gateway file logs.",
    },
    common: {
      n_a: "n/a",
      connected: "Connected",
      disconnected: "Disconnected",
      loading: "Loading...",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      enabled: "Enabled",
      disabled: "Disabled",
    }
  },
  'zh-TW': {
    nav: {
      chat: "聊天",
      control: "控制台",
      agent: "代理",
      settings: "設定",
    },
    tabs: {
      overview: "概觀",
      channels: "通道",
      instances: "執行實例",
      sessions: "工作階段",
      cron: "排程任務",
      skills: "技能",
      nodes: "節點",
      chat: "即時聊天",
      config: "組態配置",
      debug: "除錯",
      logs: "日誌",
    },
    subtitles: {
      overview: "網關狀態、進入點及快速健康檢查。",
      channels: "管理通訊通道與設定。",
      instances: "來自已連線用戶端與節點的狀態訊號。",
      sessions: "查看活動中的工作階段並調整預設值。",
      cron: "排程喚醒與循環代理執行任務。",
      skills: "管理技能可用性與 API 金鑰注入。",
      nodes: "配對設備、功能與指令暴露設定。",
      chat: "直接與網關對話的工作階段，用於快速干預。",
      config: "安全地編輯設定檔。",
      debug: "網關快照、事件與手動 RPC 調用。",
      logs: "即時追蹤網關檔案日誌。",
    },
    common: {
      n_a: "不適用",
      connected: "已連線",
      disconnected: "已斷線",
      loading: "載入中...",
      save: "儲存",
      cancel: "取消",
      delete: "刪除",
      enabled: "已啟用",
      disabled: "已停用",
    }
  }
};

let currentLang: Language = 'en';

export function setLanguage(lang: Language) {
  currentLang = lang;
}

export function getLanguage(): Language {
  // Try to detect browser language if not set
  if (typeof navigator !== 'undefined' && currentLang === 'en') {
    if (navigator.language.startsWith('zh')) {
      return 'zh-TW';
    }
  }
  return currentLang;
}

export function t(): Translations {
  return DICTIONARY[getLanguage()];
}
