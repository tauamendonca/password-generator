import { StyleSheet } from "react-native";

export const colors = {
  // Primary (trust / main actions)
  primary: "#3B82F6",
  primaryDark: "#2563EB",
  primaryText: "#FFFFFF",

  // Secondary (success / confirmation)
  success: "#10B981",
  successDark: "#059669",
  successTint: "#D1FAE5",
  successText: "#FFFFFF",

  // Error (warnings / failures)
  error: "#EF4444",
  errorDark: "#DC2626",
  errorTint: "#FEE2E2",
  errorText: "#FFFFFF",

  // Neutrals
  backgroundLight: "#F8FBFF",
  backgroundSubtle: "#EEF3FA",
  white: "#FFFFFF",
  border: "#E5E7EB",
  textPrimary: "#111827",
  textSecondary: "#374151",
  textMuted: "#9CA3AF",
};


export const typography = StyleSheet.create({
  appTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: colors.primary,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: colors.textMuted,
    textTransform: "uppercase",
  },
  passwordText: {
    fontSize: 20,
    fontWeight: 500,
    color: colors.textPrimary,
  },
  buttonTextPrimary: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.white,
  },
  buttonTextSecondary: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.textPrimary,
  },
  feedbackSuccess: {
    fontSize: 14,
    fontWeight: 500,
    color: colors.success,
  },
  feedbackError: {
    fontSize: 14,
    fontWeight: 500,
    color: colors.error,
  },
});


export const layout = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  
  logo: {
    alignSelf: "center",
    marginBottom: 24,
  },
  
  passwordBox: {
    width: "90%",
    height: 56,
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    marginTop: 12,
    marginBottom: 48,
  },

  buttonColumn: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  
  buttonPrimary: {
    width:'80%',
    flexDirection:'column',
    backgroundColor: colors.primary,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  
  buttonSecondary: {
    width: "80%",
    backgroundColor: colors.white,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: 6,
    marginTop: 12
  },
  feedback: {
    marginTop: 12,
    alignSelf: "center",
  },
});