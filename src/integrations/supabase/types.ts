export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      access_denied_logs: {
        Row: {
          church_id: string
          created_at: string | null
          denied_reason: string
          details: Json | null
          http_method: string
          id: string
          ip_address: string | null
          request_path: string
          required_level: number | null
          user_agent: string | null
          user_email: string | null
          user_id: string
          user_role: string | null
          user_role_level: number | null
        }
        Insert: {
          church_id: string
          created_at?: string | null
          denied_reason: string
          details?: Json | null
          http_method: string
          id?: string
          ip_address?: string | null
          request_path: string
          required_level?: number | null
          user_agent?: string | null
          user_email?: string | null
          user_id: string
          user_role?: string | null
          user_role_level?: number | null
        }
        Update: {
          church_id?: string
          created_at?: string | null
          denied_reason?: string
          details?: Json | null
          http_method?: string
          id?: string
          ip_address?: string | null
          request_path?: string
          required_level?: number | null
          user_agent?: string | null
          user_email?: string | null
          user_id?: string
          user_role?: string | null
          user_role_level?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "access_denied_logs_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          changed_at: string | null
          changed_by: string | null
          church_id: string
          id: string
          ip_address: string | null
          new_values: Json | null
          old_values: Json | null
          record_id: string
          session_id: string | null
          table_name: string
          user_agent: string | null
        }
        Insert: {
          action: string
          changed_at?: string | null
          changed_by?: string | null
          church_id: string
          id?: string
          ip_address?: string | null
          new_values?: Json | null
          old_values?: Json | null
          record_id: string
          session_id?: string | null
          table_name: string
          user_agent?: string | null
        }
        Update: {
          action?: string
          changed_at?: string | null
          changed_by?: string | null
          church_id?: string
          id?: string
          ip_address?: string | null
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string
          session_id?: string | null
          table_name?: string
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_logs_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      backup_settings: {
        Row: {
          church_id: string
          created_at: string
          id: string
          notify_email: string | null
          retention_days: number
          updated_at: string
        }
        Insert: {
          church_id: string
          created_at?: string
          id?: string
          notify_email?: string | null
          retention_days?: number
          updated_at?: string
        }
        Update: {
          church_id?: string
          created_at?: string
          id?: string
          notify_email?: string | null
          retention_days?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "backup_settings_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: true
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      cell_multiplication_tracking: {
        Row: {
          church_id: string
          created_at: string
          id: string
          initial_members: number | null
          multiplication_date: string
          multiplication_type: string | null
          new_group_id: string | null
          new_leader_id: string | null
          notes: string | null
          parent_group_id: string
          parent_leader_id: string
          success_status: string | null
          updated_at: string
        }
        Insert: {
          church_id: string
          created_at?: string
          id?: string
          initial_members?: number | null
          multiplication_date: string
          multiplication_type?: string | null
          new_group_id?: string | null
          new_leader_id?: string | null
          notes?: string | null
          parent_group_id: string
          parent_leader_id: string
          success_status?: string | null
          updated_at?: string
        }
        Update: {
          church_id?: string
          created_at?: string
          id?: string
          initial_members?: number | null
          multiplication_date?: string
          multiplication_type?: string | null
          new_group_id?: string | null
          new_leader_id?: string | null
          notes?: string | null
          parent_group_id?: string
          parent_leader_id?: string
          success_status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cell_multiplication_tracking_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      church_info: {
        Row: {
          address: string | null
          banner_url: string | null
          church_id: string
          created_at: string | null
          description: string | null
          email: string | null
          id: string
          logo_url: string | null
          mission: string | null
          name: string
          pastor_name: string | null
          phone: string | null
          primary_color: string | null
          secondary_color: string | null
          service_times: Json | null
          social_facebook: string | null
          social_instagram: string | null
          social_twitter: string | null
          social_youtube: string | null
          updated_at: string | null
          vision: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          banner_url?: string | null
          church_id: string
          created_at?: string | null
          description?: string | null
          email?: string | null
          id?: string
          logo_url?: string | null
          mission?: string | null
          name?: string
          pastor_name?: string | null
          phone?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          service_times?: Json | null
          social_facebook?: string | null
          social_instagram?: string | null
          social_twitter?: string | null
          social_youtube?: string | null
          updated_at?: string | null
          vision?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          banner_url?: string | null
          church_id?: string
          created_at?: string | null
          description?: string | null
          email?: string | null
          id?: string
          logo_url?: string | null
          mission?: string | null
          name?: string
          pastor_name?: string | null
          phone?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          service_times?: Json | null
          social_facebook?: string | null
          social_instagram?: string | null
          social_twitter?: string | null
          social_youtube?: string | null
          updated_at?: string | null
          vision?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "church_info_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      churches: {
        Row: {
          cancelled_at: string | null
          created_at: string
          deleted_at: string | null
          id: string
          name: string
          plan: string | null
          region: string | null
          slug: string | null
          status: string
          updated_at: string
        }
        Insert: {
          cancelled_at?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          name: string
          plan?: string | null
          region?: string | null
          slug?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          cancelled_at?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          name?: string
          plan?: string | null
          region?: string | null
          slug?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      discipleship_alerts: {
        Row: {
          action_required: boolean | null
          addressed_to: string | null
          alert_type: string
          church_id: string
          created_at: string
          expires_at: string | null
          id: string
          message: string
          priority: number | null
          related_group_id: string | null
          related_user_id: string | null
          resolved: boolean | null
          resolved_at: string | null
          resolved_by: string | null
          title: string
          updated_at: string
          zone_id: string | null
          zone_name: string | null
        }
        Insert: {
          action_required?: boolean | null
          addressed_to?: string | null
          alert_type: string
          church_id: string
          created_at?: string
          expires_at?: string | null
          id?: string
          message: string
          priority?: number | null
          related_group_id?: string | null
          related_user_id?: string | null
          resolved?: boolean | null
          resolved_at?: string | null
          resolved_by?: string | null
          title: string
          updated_at?: string
          zone_id?: string | null
          zone_name?: string | null
        }
        Update: {
          action_required?: boolean | null
          addressed_to?: string | null
          alert_type?: string
          church_id?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          message?: string
          priority?: number | null
          related_group_id?: string | null
          related_user_id?: string | null
          resolved?: boolean | null
          resolved_at?: string | null
          resolved_by?: string | null
          title?: string
          updated_at?: string
          zone_id?: string | null
          zone_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discipleship_alerts_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_alerts_zone_id_fkey"
            columns: ["zone_id"]
            isOneToOne: false
            referencedRelation: "zones"
            referencedColumns: ["id"]
          },
        ]
      }
      discipleship_attendance: {
        Row: {
          attendance_type: string | null
          church_id: string
          created_at: string | null
          group_id: string
          id: string
          meeting_date: string
          notes: string | null
          present: boolean | null
          user_id: string
        }
        Insert: {
          attendance_type?: string | null
          church_id?: string
          created_at?: string | null
          group_id: string
          id?: string
          meeting_date: string
          notes?: string | null
          present?: boolean | null
          user_id: string
        }
        Update: {
          attendance_type?: string | null
          church_id?: string
          created_at?: string | null
          group_id?: string
          id?: string
          meeting_date?: string
          notes?: string | null
          present?: boolean | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "discipleship_attendance_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_attendance_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "discipleship_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_attendance_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      discipleship_goals: {
        Row: {
          church_id: string
          closed_at: string | null
          closed_by: string | null
          closed_incomplete: boolean
          closed_percentage: number | null
          closure_reason: string | null
          created_at: string
          created_by: string | null
          current_value: number | null
          deadline: string
          description: string | null
          extended_at: string | null
          extended_by: string | null
          extension_count: number
          extension_reason: string | null
          goal_type: string
          id: string
          measurement_type: string
          original_deadline: string | null
          priority: number
          progress_percentage: number | null
          status: string | null
          supervisor_id: string | null
          target_metric: string
          target_value: number
          title: string
          updated_at: string
          zone_id: string | null
          zone_name: string | null
        }
        Insert: {
          church_id: string
          closed_at?: string | null
          closed_by?: string | null
          closed_incomplete?: boolean
          closed_percentage?: number | null
          closure_reason?: string | null
          created_at?: string
          created_by?: string | null
          current_value?: number | null
          deadline: string
          description?: string | null
          extended_at?: string | null
          extended_by?: string | null
          extension_count?: number
          extension_reason?: string | null
          goal_type: string
          id?: string
          measurement_type?: string
          original_deadline?: string | null
          priority?: number
          progress_percentage?: number | null
          status?: string | null
          supervisor_id?: string | null
          target_metric: string
          target_value: number
          title?: string
          updated_at?: string
          zone_id?: string | null
          zone_name?: string | null
        }
        Update: {
          church_id?: string
          closed_at?: string | null
          closed_by?: string | null
          closed_incomplete?: boolean
          closed_percentage?: number | null
          closure_reason?: string | null
          created_at?: string
          created_by?: string | null
          current_value?: number | null
          deadline?: string
          description?: string | null
          extended_at?: string | null
          extended_by?: string | null
          extension_count?: number
          extension_reason?: string | null
          goal_type?: string
          id?: string
          measurement_type?: string
          original_deadline?: string | null
          priority?: number
          progress_percentage?: number | null
          status?: string | null
          supervisor_id?: string | null
          target_metric?: string
          target_value?: number
          title?: string
          updated_at?: string
          zone_id?: string | null
          zone_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discipleship_goals_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_goals_closed_by_fkey"
            columns: ["closed_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_goals_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_goals_extended_by_fkey"
            columns: ["extended_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_goals_zone_id_fkey"
            columns: ["zone_id"]
            isOneToOne: false
            referencedRelation: "zones"
            referencedColumns: ["id"]
          },
        ]
      }
      discipleship_group_members: {
        Row: {
          church_id: string
          created_at: string | null
          group_id: string
          id: string
          is_active: boolean | null
          joined_at: string | null
          role_in_group: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          church_id?: string
          created_at?: string | null
          group_id: string
          id?: string
          is_active?: boolean | null
          joined_at?: string | null
          role_in_group?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          church_id?: string
          created_at?: string | null
          group_id?: string
          id?: string
          is_active?: boolean | null
          joined_at?: string | null
          role_in_group?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "discipleship_group_members_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_group_members_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "discipleship_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_group_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      discipleship_groups: {
        Row: {
          active_members: number | null
          church_id: string
          created_at: string
          group_name: string
          id: string
          latitude: number | null
          leader_id: string
          longitude: number | null
          meeting_address: string | null
          meeting_day: string | null
          meeting_location: string | null
          meeting_time: string | null
          member_count: number | null
          status: string | null
          supervisor_id: string | null
          updated_at: string
          zone_id: string | null
          zone_name: string | null
        }
        Insert: {
          active_members?: number | null
          church_id?: string
          created_at?: string
          group_name: string
          id?: string
          latitude?: number | null
          leader_id: string
          longitude?: number | null
          meeting_address?: string | null
          meeting_day?: string | null
          meeting_location?: string | null
          meeting_time?: string | null
          member_count?: number | null
          status?: string | null
          supervisor_id?: string | null
          updated_at?: string
          zone_id?: string | null
          zone_name?: string | null
        }
        Update: {
          active_members?: number | null
          church_id?: string
          created_at?: string
          group_name?: string
          id?: string
          latitude?: number | null
          leader_id?: string
          longitude?: number | null
          meeting_address?: string | null
          meeting_day?: string | null
          meeting_location?: string | null
          meeting_time?: string | null
          member_count?: number | null
          status?: string | null
          supervisor_id?: string | null
          updated_at?: string
          zone_id?: string | null
          zone_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discipleship_groups_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_groups_zone_id_fkey"
            columns: ["zone_id"]
            isOneToOne: false
            referencedRelation: "zones"
            referencedColumns: ["id"]
          },
        ]
      }
      discipleship_hierarchy: {
        Row: {
          active_groups_assigned: number | null
          church_id: string
          created_at: string
          hierarchy_level: number
          id: string
          supervisor_id: string | null
          territory: string | null
          updated_at: string
          user_id: string
          zone_id: string | null
          zone_name: string | null
        }
        Insert: {
          active_groups_assigned?: number | null
          church_id?: string
          created_at?: string
          hierarchy_level: number
          id?: string
          supervisor_id?: string | null
          territory?: string | null
          updated_at?: string
          user_id: string
          zone_id?: string | null
          zone_name?: string | null
        }
        Update: {
          active_groups_assigned?: number | null
          church_id?: string
          created_at?: string
          hierarchy_level?: number
          id?: string
          supervisor_id?: string | null
          territory?: string | null
          updated_at?: string
          user_id?: string
          zone_id?: string | null
          zone_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discipleship_hierarchy_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_hierarchy_zone_id_fkey"
            columns: ["zone_id"]
            isOneToOne: false
            referencedRelation: "zones"
            referencedColumns: ["id"]
          },
        ]
      }
      discipleship_levels: {
        Row: {
          church_id: string
          color: string | null
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          is_active: boolean | null
          name: string
          order_index: number | null
          updated_at: string | null
        }
        Insert: {
          church_id?: string
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          order_index?: number | null
          updated_at?: string | null
        }
        Update: {
          church_id?: string
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          order_index?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discipleship_levels_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      discipleship_reports: {
        Row: {
          approved_at: string | null
          church_id: string
          created_at: string
          id: string
          period_end: string
          period_start: string
          report_data: Json | null
          report_level: number
          report_type: string
          reporter_id: string
          status: string | null
          submitted_at: string | null
          supervisor_id: string | null
          updated_at: string
          zone_id: string | null
        }
        Insert: {
          approved_at?: string | null
          church_id: string
          created_at?: string
          id?: string
          period_end: string
          period_start: string
          report_data?: Json | null
          report_level: number
          report_type: string
          reporter_id: string
          status?: string | null
          submitted_at?: string | null
          supervisor_id?: string | null
          updated_at?: string
          zone_id?: string | null
        }
        Update: {
          approved_at?: string | null
          church_id?: string
          created_at?: string
          id?: string
          period_end?: string
          period_start?: string
          report_data?: Json | null
          report_level?: number
          report_type?: string
          reporter_id?: string
          status?: string | null
          submitted_at?: string | null
          supervisor_id?: string | null
          updated_at?: string
          zone_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discipleship_reports_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_reports_zone_id_fkey"
            columns: ["zone_id"]
            isOneToOne: false
            referencedRelation: "zones"
            referencedColumns: ["id"]
          },
        ]
      }
      discipleship_visitors: {
        Row: {
          church_id: string
          converted_user_id: string | null
          created_at: string
          first_name: string
          first_visit_date: string
          group_id: string | null
          id: string
          invited_by: string | null
          last_name: string
          notes: string | null
          phone: string | null
          status: string
          updated_at: string
        }
        Insert: {
          church_id: string
          converted_user_id?: string | null
          created_at?: string
          first_name: string
          first_visit_date?: string
          group_id?: string | null
          id?: string
          invited_by?: string | null
          last_name?: string
          notes?: string | null
          phone?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          church_id?: string
          converted_user_id?: string | null
          created_at?: string
          first_name?: string
          first_visit_date?: string
          group_id?: string | null
          id?: string
          invited_by?: string | null
          last_name?: string
          notes?: string | null
          phone?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "discipleship_visitors_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_visitors_converted_user_id_fkey"
            columns: ["converted_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_visitors_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "discipleship_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discipleship_visitors_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      event_registrations: {
        Row: {
          church_id: string
          created_at: string
          event_id: string
          id: string
          status: string
          user_id: string
        }
        Insert: {
          church_id: string
          created_at?: string
          event_id: string
          id?: string
          status?: string
          user_id: string
        }
        Update: {
          church_id?: string
          created_at?: string
          event_id?: string
          id?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_registrations_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_registrations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          category: string
          church_id: string
          created_at: string
          created_by: string | null
          description: string | null
          end_time: string | null
          event_date: string
          id: string
          image_url: string | null
          is_published: boolean
          is_recurring: boolean
          location: string | null
          max_attendees: number | null
          organizer: string | null
          start_time: string | null
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          church_id: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          event_date: string
          id?: string
          image_url?: string | null
          is_published?: boolean
          is_recurring?: boolean
          location?: string | null
          max_attendees?: number | null
          organizer?: string | null
          start_time?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          church_id?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          event_date?: string
          id?: string
          image_url?: string | null
          is_published?: boolean
          is_recurring?: boolean
          location?: string | null
          max_attendees?: number | null
          organizer?: string | null
          start_time?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      federated_sessions_log: {
        Row: {
          church_id: string
          expires_at: string
          id: string
          jti: string
          mode: string
          operator_id: string
          operator_name: string
          origin_ip: string | null
          reason: string | null
          redeemed_at: string
          role: string | null
          ticket_id: string | null
        }
        Insert: {
          church_id: string
          expires_at: string
          id?: string
          jti: string
          mode: string
          operator_id: string
          operator_name: string
          origin_ip?: string | null
          reason?: string | null
          redeemed_at?: string
          role?: string | null
          ticket_id?: string | null
        }
        Update: {
          church_id?: string
          expires_at?: string
          id?: string
          jti?: string
          mode?: string
          operator_id?: string
          operator_name?: string
          origin_ip?: string | null
          reason?: string | null
          redeemed_at?: string
          role?: string | null
          ticket_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "federated_sessions_log_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      goal_assignments: {
        Row: {
          assigned_by: string
          assigned_level: number
          assigned_to: string
          church_id: string
          created_at: string
          current_value: number
          goal_id: string
          id: string
          notes: string | null
          parent_assignment_id: string | null
          progress_percentage: number | null
          status: string
          target_value: number
          updated_at: string
        }
        Insert: {
          assigned_by: string
          assigned_level: number
          assigned_to: string
          church_id: string
          created_at?: string
          current_value?: number
          goal_id: string
          id?: string
          notes?: string | null
          parent_assignment_id?: string | null
          progress_percentage?: number | null
          status?: string
          target_value?: number
          updated_at?: string
        }
        Update: {
          assigned_by?: string
          assigned_level?: number
          assigned_to?: string
          church_id?: string
          created_at?: string
          current_value?: number
          goal_id?: string
          id?: string
          notes?: string | null
          parent_assignment_id?: string | null
          progress_percentage?: number | null
          status?: string
          target_value?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "goal_assignments_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goal_assignments_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goal_assignments_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goal_assignments_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "discipleship_goals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goal_assignments_parent_assignment_id_fkey"
            columns: ["parent_assignment_id"]
            isOneToOne: false
            referencedRelation: "goal_assignments"
            referencedColumns: ["id"]
          },
        ]
      }
      goal_manual_progress: {
        Row: {
          assignment_id: string
          church_id: string
          created_at: string
          id: string
          notes: string | null
          period_end: string | null
          period_start: string | null
          report_id: string | null
          reporter_id: string
          value_reported: number
        }
        Insert: {
          assignment_id: string
          church_id: string
          created_at?: string
          id?: string
          notes?: string | null
          period_end?: string | null
          period_start?: string | null
          report_id?: string | null
          reporter_id: string
          value_reported: number
        }
        Update: {
          assignment_id?: string
          church_id?: string
          created_at?: string
          id?: string
          notes?: string | null
          period_end?: string | null
          period_start?: string | null
          report_id?: string | null
          reporter_id?: string
          value_reported?: number
        }
        Relationships: [
          {
            foreignKeyName: "goal_manual_progress_assignment_id_fkey"
            columns: ["assignment_id"]
            isOneToOne: false
            referencedRelation: "goal_assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goal_manual_progress_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goal_manual_progress_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "discipleship_reports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goal_manual_progress_reporter_id_fkey"
            columns: ["reporter_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      integration_settings: {
        Row: {
          church_id: string
          created_at: string
          crm_webhook_url: string | null
          email_api_key: string | null
          email_provider: string
          id: string
          payment_api_key: string | null
          payment_provider: string
          updated_at: string
          whatsapp_api_key: string | null
          whatsapp_enabled: boolean
          whatsapp_phone_number_id: string | null
        }
        Insert: {
          church_id: string
          created_at?: string
          crm_webhook_url?: string | null
          email_api_key?: string | null
          email_provider?: string
          id?: string
          payment_api_key?: string | null
          payment_provider?: string
          updated_at?: string
          whatsapp_api_key?: string | null
          whatsapp_enabled?: boolean
          whatsapp_phone_number_id?: string | null
        }
        Update: {
          church_id?: string
          created_at?: string
          crm_webhook_url?: string | null
          email_api_key?: string | null
          email_provider?: string
          id?: string
          payment_api_key?: string | null
          payment_provider?: string
          updated_at?: string
          whatsapp_api_key?: string | null
          whatsapp_enabled?: boolean
          whatsapp_phone_number_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "integration_settings_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: true
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      live_streams: {
        Row: {
          actual_start: string | null
          church_id: string
          created_at: string
          description: string | null
          id: string
          is_live: boolean
          scheduled_start: string | null
          title: string
          updated_at: string
          user_invitations: string | null
          youtube_video_id: string | null
        }
        Insert: {
          actual_start?: string | null
          church_id: string
          created_at?: string
          description?: string | null
          id?: string
          is_live?: boolean
          scheduled_start?: string | null
          title?: string
          updated_at?: string
          user_invitations?: string | null
          youtube_video_id?: string | null
        }
        Update: {
          actual_start?: string | null
          church_id?: string
          created_at?: string
          description?: string | null
          id?: string
          is_live?: boolean
          scheduled_start?: string | null
          title?: string
          updated_at?: string
          user_invitations?: string | null
          youtube_video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "live_streams_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      module_user_roles: {
        Row: {
          assigned_by: string | null
          church_id: string
          created_at: string
          id: string
          module_key: string
          role_level: number
          role_name: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          assigned_by?: string | null
          church_id: string
          created_at?: string
          id?: string
          module_key: string
          role_level: number
          role_name?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          assigned_by?: string | null
          church_id?: string
          created_at?: string
          id?: string
          module_key?: string
          role_level?: number
          role_name?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "module_user_roles_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_user_roles_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      modules: {
        Row: {
          church_id: string
          description: string | null
          installed_at: string | null
          is_installed: boolean | null
          key: string
          name: string
        }
        Insert: {
          church_id?: string
          description?: string | null
          installed_at?: string | null
          is_installed?: boolean | null
          key: string
          name: string
        }
        Update: {
          church_id?: string
          description?: string | null
          installed_at?: string | null
          is_installed?: boolean | null
          key?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "modules_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      music_assignments: {
        Row: {
          assigned_by: string | null
          church_id: string
          created_at: string
          event_id: string
          funcion: string
          id: string
          member_id: string
          state: string
          updated_at: string
        }
        Insert: {
          assigned_by?: string | null
          church_id: string
          created_at?: string
          event_id: string
          funcion: string
          id?: string
          member_id: string
          state?: string
          updated_at?: string
        }
        Update: {
          assigned_by?: string | null
          church_id?: string
          created_at?: string
          event_id?: string
          funcion?: string
          id?: string
          member_id?: string
          state?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "music_assignments_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "music_assignments_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "music_assignments_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "music_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "music_assignments_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "music_members"
            referencedColumns: ["id"]
          },
        ]
      }
      music_event_songs: {
        Row: {
          church_id: string
          created_at: string
          event_id: string
          id: string
          notes: string | null
          order_index: number
          song_id: string
          tono: string | null
        }
        Insert: {
          church_id: string
          created_at?: string
          event_id: string
          id?: string
          notes?: string | null
          order_index?: number
          song_id: string
          tono?: string | null
        }
        Update: {
          church_id?: string
          created_at?: string
          event_id?: string
          id?: string
          notes?: string | null
          order_index?: number
          song_id?: string
          tono?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "music_event_songs_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "music_event_songs_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "music_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "music_event_songs_song_id_fkey"
            columns: ["song_id"]
            isOneToOne: false
            referencedRelation: "music_songs"
            referencedColumns: ["id"]
          },
        ]
      }
      music_events: {
        Row: {
          church_id: string
          created_at: string
          event_date: string
          event_type: string
          id: string
          notes: string | null
          published: boolean
          title: string | null
          updated_at: string
        }
        Insert: {
          church_id: string
          created_at?: string
          event_date: string
          event_type: string
          id?: string
          notes?: string | null
          published?: boolean
          title?: string | null
          updated_at?: string
        }
        Update: {
          church_id?: string
          created_at?: string
          event_date?: string
          event_type?: string
          id?: string
          notes?: string | null
          published?: boolean
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "music_events_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      music_instruments: {
        Row: {
          category: string
          church_id: string
          created_at: string
          id: string
          is_active: boolean
          name: string
          sort_order: number
        }
        Insert: {
          category?: string
          church_id: string
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          sort_order?: number
        }
        Update: {
          category?: string
          church_id?: string
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "music_instruments_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      music_members: {
        Row: {
          church_id: string
          created_at: string
          funciones: string[]
          id: string
          instrument: string | null
          is_active: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          church_id: string
          created_at?: string
          funciones?: string[]
          id?: string
          instrument?: string | null
          is_active?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          church_id?: string
          created_at?: string
          funciones?: string[]
          id?: string
          instrument?: string | null
          is_active?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "music_members_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "music_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      music_songs: {
        Row: {
          author: string | null
          church_id: string
          created_at: string
          default_key: string | null
          id: string
          link: string | null
          name: string
          name_normalized: string
        }
        Insert: {
          author?: string | null
          church_id: string
          created_at?: string
          default_key?: string | null
          id?: string
          link?: string | null
          name: string
          name_normalized: string
        }
        Update: {
          author?: string | null
          church_id?: string
          created_at?: string
          default_key?: string | null
          id?: string
          link?: string | null
          name?: string
          name_normalized?: string
        }
        Relationships: [
          {
            foreignKeyName: "music_songs_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      music_telegram_files: {
        Row: {
          channel_date: string | null
          church_id: string
          created_at: string
          duration: number | null
          file_id: string
          file_name: string | null
          file_size: number | null
          file_unique_id: string
          id: string
          message_id: number | null
          mime_type: string | null
          performer: string | null
          title: string | null
        }
        Insert: {
          channel_date?: string | null
          church_id: string
          created_at?: string
          duration?: number | null
          file_id: string
          file_name?: string | null
          file_size?: number | null
          file_unique_id: string
          id?: string
          message_id?: number | null
          mime_type?: string | null
          performer?: string | null
          title?: string | null
        }
        Update: {
          channel_date?: string | null
          church_id?: string
          created_at?: string
          duration?: number | null
          file_id?: string
          file_name?: string | null
          file_size?: number | null
          file_unique_id?: string
          id?: string
          message_id?: number | null
          mime_type?: string | null
          performer?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "music_telegram_files_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      music_unavailability: {
        Row: {
          church_id: string
          created_at: string
          end_date: string | null
          id: string
          member_id: string
          reason: string | null
          start_date: string
        }
        Insert: {
          church_id: string
          created_at?: string
          end_date?: string | null
          id?: string
          member_id: string
          reason?: string | null
          start_date: string
        }
        Update: {
          church_id?: string
          created_at?: string
          end_date?: string | null
          id?: string
          member_id?: string
          reason?: string | null
          start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "music_unavailability_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "music_unavailability_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "music_members"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_config: {
        Row: {
          church_id: string
          created_at: string | null
          email_enabled: boolean | null
          event_reminders: boolean | null
          id: string
          important_messages: boolean | null
          new_user_notifications: boolean | null
          push_enabled: boolean | null
          role_change_notifications: boolean | null
          sms_enabled: boolean | null
          smtp_from_email: string | null
          smtp_from_name: string | null
          smtp_host: string | null
          smtp_password: string | null
          smtp_port: number | null
          smtp_user: string | null
          updated_at: string | null
          weekly_reports: boolean | null
        }
        Insert: {
          church_id: string
          created_at?: string | null
          email_enabled?: boolean | null
          event_reminders?: boolean | null
          id?: string
          important_messages?: boolean | null
          new_user_notifications?: boolean | null
          push_enabled?: boolean | null
          role_change_notifications?: boolean | null
          sms_enabled?: boolean | null
          smtp_from_email?: string | null
          smtp_from_name?: string | null
          smtp_host?: string | null
          smtp_password?: string | null
          smtp_port?: number | null
          smtp_user?: string | null
          updated_at?: string | null
          weekly_reports?: boolean | null
        }
        Update: {
          church_id?: string
          created_at?: string | null
          email_enabled?: boolean | null
          event_reminders?: boolean | null
          id?: string
          important_messages?: boolean | null
          new_user_notifications?: boolean | null
          push_enabled?: boolean | null
          role_change_notifications?: boolean | null
          sms_enabled?: boolean | null
          smtp_from_email?: string | null
          smtp_from_name?: string | null
          smtp_host?: string | null
          smtp_password?: string | null
          smtp_port?: number | null
          smtp_user?: string | null
          updated_at?: string | null
          weekly_reports?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "notification_config_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_queue: {
        Row: {
          body: string
          channel: string
          church_id: string
          created_at: string
          error: string | null
          id: string
          sent_at: string | null
          status: string
          subject: string
          user_id: string
        }
        Insert: {
          body: string
          channel?: string
          church_id: string
          created_at?: string
          error?: string | null
          id?: string
          sent_at?: string | null
          status?: string
          subject: string
          user_id: string
        }
        Update: {
          body?: string
          channel?: string
          church_id?: string
          created_at?: string
          error?: string | null
          id?: string
          sent_at?: string | null
          status?: string
          subject?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_queue_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notification_queue_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          action_text: string | null
          action_url: string | null
          church_id: string
          created_at: string
          id: string
          message: string
          read: boolean
          related_entity_id: string | null
          related_entity_type: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          action_text?: string | null
          action_url?: string | null
          church_id: string
          created_at?: string
          id?: string
          message: string
          read?: boolean
          related_entity_id?: string | null
          related_entity_type?: string | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          action_text?: string | null
          action_url?: string | null
          church_id?: string
          created_at?: string
          id?: string
          message?: string
          read?: boolean
          related_entity_id?: string | null
          related_entity_type?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions: {
        Row: {
          created_at: string | null
          description: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      report_compliance: {
        Row: {
          church_id: string
          created_at: string
          due_date: string
          escalation_sent: boolean
          id: string
          iso_week: string
          missed_count: number
          notified_failer: boolean
          period_end: string
          period_start: string
          reminder_sent: boolean
          report_id: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          church_id: string
          created_at?: string
          due_date: string
          escalation_sent?: boolean
          id?: string
          iso_week: string
          missed_count?: number
          notified_failer?: boolean
          period_end: string
          period_start: string
          reminder_sent?: boolean
          report_id?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          church_id?: string
          created_at?: string
          due_date?: string
          escalation_sent?: boolean
          id?: string
          iso_week?: string
          missed_count?: number
          notified_failer?: boolean
          period_end?: string
          period_start?: string
          reminder_sent?: boolean
          report_id?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_compliance_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      report_generations: {
        Row: {
          church_id: string
          format: string
          generated_at: string
          generated_by: string | null
          id: string
          report_type: string
          title: string | null
        }
        Insert: {
          church_id: string
          format?: string
          generated_at?: string
          generated_by?: string | null
          id?: string
          report_type: string
          title?: string | null
        }
        Update: {
          church_id?: string
          format?: string
          generated_at?: string
          generated_by?: string | null
          id?: string
          report_type?: string
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "report_generations_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_generations_generated_by_fkey"
            columns: ["generated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      report_schedules: {
        Row: {
          active: boolean
          church_id: string
          created_at: string
          created_by: string | null
          format: string
          frequency: string
          id: string
          next_run_at: string
          recipient_user_ids: string[]
          report_type: string
          title: string
        }
        Insert: {
          active?: boolean
          church_id: string
          created_at?: string
          created_by?: string | null
          format?: string
          frequency: string
          id?: string
          next_run_at?: string
          recipient_user_ids?: string[]
          report_type: string
          title: string
        }
        Update: {
          active?: boolean
          church_id?: string
          created_at?: string
          created_by?: string | null
          format?: string
          frequency?: string
          id?: string
          next_run_at?: string
          recipient_user_ids?: string[]
          report_type?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_schedules_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_schedules_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      reports: {
        Row: {
          church_id: string
          file_url: string | null
          generated_at: string | null
          generated_by: string
          id: string
          parameters: Json | null
          status: string | null
          title: string
          type: string
        }
        Insert: {
          church_id: string
          file_url?: string | null
          generated_at?: string | null
          generated_by: string
          id?: string
          parameters?: Json | null
          status?: string | null
          title: string
          type: string
        }
        Update: {
          church_id?: string
          file_url?: string | null
          generated_at?: string | null
          generated_by?: string
          id?: string
          parameters?: Json | null
          status?: string | null
          title?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "reports_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reports_generated_by_fkey"
            columns: ["generated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      role_module_access: {
        Row: {
          church_id: string
          created_at: string | null
          enabled: boolean
          id: string
          module_key: string
          role: string
          updated_at: string | null
        }
        Insert: {
          church_id: string
          created_at?: string | null
          enabled?: boolean
          id?: string
          module_key: string
          role: string
          updated_at?: string | null
        }
        Update: {
          church_id?: string
          created_at?: string | null
          enabled?: boolean
          id?: string
          module_key?: string
          role?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "role_module_access_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          created_at: string | null
          id: string
          permission_id: string
          role: Database["public"]["Enums"]["role"]
        }
        Insert: {
          created_at?: string | null
          id?: string
          permission_id: string
          role: Database["public"]["Enums"]["role"]
        }
        Update: {
          created_at?: string | null
          id?: string
          permission_id?: string
          role?: Database["public"]["Enums"]["role"]
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
        ]
      }
      security_events: {
        Row: {
          actor_id: string | null
          church_id: string
          created_at: string
          details: Json | null
          event_type: string
          id: string
          ip_address: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          actor_id?: string | null
          church_id: string
          created_at?: string
          details?: Json | null
          event_type: string
          id?: string
          ip_address?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          actor_id?: string | null
          church_id?: string
          created_at?: string
          details?: Json | null
          event_type?: string
          id?: string
          ip_address?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "security_events_actor_id_fkey"
            columns: ["actor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "security_events_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "security_events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      security_settings: {
        Row: {
          church_id: string
          created_at: string
          id: string
          lockout_duration_minutes: number
          max_login_attempts: number
          min_password_length: number
          password_expiry_days: number | null
          require_number: boolean
          require_special_char: boolean
          require_uppercase: boolean
          updated_at: string
        }
        Insert: {
          church_id: string
          created_at?: string
          id?: string
          lockout_duration_minutes?: number
          max_login_attempts?: number
          min_password_length?: number
          password_expiry_days?: number | null
          require_number?: boolean
          require_special_char?: boolean
          require_uppercase?: boolean
          updated_at?: string
        }
        Update: {
          church_id?: string
          created_at?: string
          id?: string
          lockout_duration_minutes?: number
          max_login_attempts?: number
          min_password_length?: number
          password_expiry_days?: number | null
          require_number?: boolean
          require_special_char?: boolean
          require_uppercase?: boolean
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "security_settings_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: true
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      settings_audit_log: {
        Row: {
          action: string
          changed_at: string | null
          changed_by: string | null
          church_id: string
          id: string
          new_values: Json | null
          old_values: Json | null
          table_name: string
        }
        Insert: {
          action: string
          changed_at?: string | null
          changed_by?: string | null
          church_id: string
          id?: string
          new_values?: Json | null
          old_values?: Json | null
          table_name: string
        }
        Update: {
          action?: string
          changed_at?: string | null
          changed_by?: string | null
          church_id?: string
          id?: string
          new_values?: Json | null
          old_values?: Json | null
          table_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "settings_audit_log_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      system_settings: {
        Row: {
          allow_registrations: boolean | null
          animations_enabled: boolean | null
          church_id: string
          created_at: string | null
          default_language: string | null
          default_theme: string | null
          id: string
          maintenance_mode: boolean | null
          max_users_per_group: number | null
          session_timeout_minutes: number | null
          sidebar_collapsed: boolean | null
          site_name: string
          site_version: string | null
          timezone: string | null
          updated_at: string | null
        }
        Insert: {
          allow_registrations?: boolean | null
          animations_enabled?: boolean | null
          church_id: string
          created_at?: string | null
          default_language?: string | null
          default_theme?: string | null
          id?: string
          maintenance_mode?: boolean | null
          max_users_per_group?: number | null
          session_timeout_minutes?: number | null
          sidebar_collapsed?: boolean | null
          site_name?: string
          site_version?: string | null
          timezone?: string | null
          updated_at?: string | null
        }
        Update: {
          allow_registrations?: boolean | null
          animations_enabled?: boolean | null
          church_id?: string
          created_at?: string | null
          default_language?: string | null
          default_theme?: string | null
          id?: string
          maintenance_mode?: boolean | null
          max_users_per_group?: number | null
          session_timeout_minutes?: number | null
          sidebar_collapsed?: boolean | null
          site_name?: string
          site_version?: string | null
          timezone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "system_settings_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      user_documents: {
        Row: {
          church_id: string
          created_at: string
          file_name: string
          id: string
          storage_path: string
          uploaded_by: string | null
          user_id: string
        }
        Insert: {
          church_id: string
          created_at?: string
          file_name: string
          id?: string
          storage_path: string
          uploaded_by?: string | null
          user_id: string
        }
        Update: {
          church_id?: string
          created_at?: string
          file_name?: string
          id?: string
          storage_path?: string
          uploaded_by?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_documents_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_documents_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_documents_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_invitations: {
        Row: {
          accepted_at: string | null
          assigned_role: Database["public"]["Enums"]["user_role"]
          church_id: string
          created_at: string | null
          email: string
          expires_at: string | null
          first_name: string
          id: string
          id_number: string | null
          invited_at: string | null
          invited_by: string | null
          last_name: string
          magic_link_hash: string | null
          phone: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          accepted_at?: string | null
          assigned_role?: Database["public"]["Enums"]["user_role"]
          church_id: string
          created_at?: string | null
          email: string
          expires_at?: string | null
          first_name: string
          id?: string
          id_number?: string | null
          invited_at?: string | null
          invited_by?: string | null
          last_name: string
          magic_link_hash?: string | null
          phone?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          accepted_at?: string | null
          assigned_role?: Database["public"]["Enums"]["user_role"]
          church_id?: string
          created_at?: string | null
          email?: string
          expires_at?: string | null
          first_name?: string
          id?: string
          id_number?: string | null
          invited_at?: string | null
          invited_by?: string | null
          last_name?: string
          magic_link_hash?: string | null
          phone?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_invitations_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      user_permissions: {
        Row: {
          action: string
          church_id: string
          created_at: string | null
          granted: boolean | null
          granted_by: string | null
          id: string
          permission_name: string
          resource: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          action: string
          church_id: string
          created_at?: string | null
          granted?: boolean | null
          granted_by?: string | null
          id?: string
          permission_name: string
          resource: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          action?: string
          church_id?: string
          created_at?: string | null
          granted?: boolean | null
          granted_by?: string | null
          id?: string
          permission_name?: string
          resource?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_permissions_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_permissions_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_preferences: {
        Row: {
          church_id: string
          created_at: string | null
          email_notifications: boolean | null
          event_reminders: boolean | null
          id: string
          language: string | null
          profile_visibility: string | null
          push_notifications: boolean | null
          show_email: boolean | null
          show_phone: boolean | null
          sms_notifications: boolean | null
          theme: string | null
          timezone: string | null
          updated_at: string | null
          user_id: string
          weekly_newsletter: boolean | null
          whatsapp_notifications: boolean | null
        }
        Insert: {
          church_id: string
          created_at?: string | null
          email_notifications?: boolean | null
          event_reminders?: boolean | null
          id?: string
          language?: string | null
          profile_visibility?: string | null
          push_notifications?: boolean | null
          show_email?: boolean | null
          show_phone?: boolean | null
          sms_notifications?: boolean | null
          theme?: string | null
          timezone?: string | null
          updated_at?: string | null
          user_id: string
          weekly_newsletter?: boolean | null
          whatsapp_notifications?: boolean | null
        }
        Update: {
          church_id?: string
          created_at?: string | null
          email_notifications?: boolean | null
          event_reminders?: boolean | null
          id?: string
          language?: string | null
          profile_visibility?: string | null
          push_notifications?: boolean | null
          show_email?: boolean | null
          show_phone?: boolean | null
          sms_notifications?: boolean | null
          theme?: string | null
          timezone?: string | null
          updated_at?: string | null
          user_id?: string
          weekly_newsletter?: boolean | null
          whatsapp_notifications?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "user_preferences_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          church_id: string
          created_at: string
          id: string
          module_name: string
          profile_data: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          church_id: string
          created_at?: string
          id?: string
          module_name: string
          profile_data?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          church_id?: string
          created_at?: string
          id?: string
          module_name?: string
          profile_data?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_profiles_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          active_groups_count: number | null
          address: string
          avatar_url: string | null
          baptism_date: string | null
          baptized: boolean | null
          birth_date: string | null
          bondev_operator_id: string | null
          cell_group: string | null
          cell_leader_id: string | null
          church_id: string
          created_at: string | null
          discipleship_level: number | null
          education_level: string | null
          email: string
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          first_name: string
          first_visit_date: string | null
          how_found_church: string | null
          id: string
          id_number: string
          is_active: boolean | null
          is_active_member: boolean | null
          is_super_admin: boolean | null
          is_support_operator: boolean
          last_name: string
          last_seen_at: string | null
          latitude: number | null
          longitude: number | null
          marital_status: string | null
          membership_date: string | null
          ministry_interest: string | null
          occupation: string | null
          onboarding_completed: boolean | null
          pastoral_notes: string | null
          phone: string
          role: Database["public"]["Enums"]["user_role"]
          territory: string | null
          updated_at: string | null
          whatsapp: boolean | null
          zone_id: string | null
          zone_name: string | null
        }
        Insert: {
          active_groups_count?: number | null
          address: string
          avatar_url?: string | null
          baptism_date?: string | null
          baptized?: boolean | null
          birth_date?: string | null
          bondev_operator_id?: string | null
          cell_group?: string | null
          cell_leader_id?: string | null
          church_id?: string
          created_at?: string | null
          discipleship_level?: number | null
          education_level?: string | null
          email: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          first_name: string
          first_visit_date?: string | null
          how_found_church?: string | null
          id?: string
          id_number: string
          is_active?: boolean | null
          is_active_member?: boolean | null
          is_super_admin?: boolean | null
          is_support_operator?: boolean
          last_name: string
          last_seen_at?: string | null
          latitude?: number | null
          longitude?: number | null
          marital_status?: string | null
          membership_date?: string | null
          ministry_interest?: string | null
          occupation?: string | null
          onboarding_completed?: boolean | null
          pastoral_notes?: string | null
          phone: string
          role?: Database["public"]["Enums"]["user_role"]
          territory?: string | null
          updated_at?: string | null
          whatsapp?: boolean | null
          zone_id?: string | null
          zone_name?: string | null
        }
        Update: {
          active_groups_count?: number | null
          address?: string
          avatar_url?: string | null
          baptism_date?: string | null
          baptized?: boolean | null
          birth_date?: string | null
          bondev_operator_id?: string | null
          cell_group?: string | null
          cell_leader_id?: string | null
          church_id?: string
          created_at?: string | null
          discipleship_level?: number | null
          education_level?: string | null
          email?: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          first_name?: string
          first_visit_date?: string | null
          how_found_church?: string | null
          id?: string
          id_number?: string
          is_active?: boolean | null
          is_active_member?: boolean | null
          is_super_admin?: boolean | null
          is_support_operator?: boolean
          last_name?: string
          last_seen_at?: string | null
          latitude?: number | null
          longitude?: number | null
          marital_status?: string | null
          membership_date?: string | null
          ministry_interest?: string | null
          occupation?: string | null
          onboarding_completed?: boolean | null
          pastoral_notes?: string | null
          phone?: string
          role?: Database["public"]["Enums"]["user_role"]
          territory?: string | null
          updated_at?: string | null
          whatsapp?: boolean | null
          zone_id?: string | null
          zone_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_cell_leader_id_fkey"
            columns: ["cell_leader_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_zone_id_fkey"
            columns: ["zone_id"]
            isOneToOne: false
            referencedRelation: "zones"
            referencedColumns: ["id"]
          },
        ]
      }
      zones: {
        Row: {
          avg_attendance: number | null
          boundaries: Json | null
          center_lat: number | null
          center_lng: number | null
          church_id: string
          color: string
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          supervisor_id: string | null
          total_groups: number | null
          total_members: number | null
          updated_at: string | null
        }
        Insert: {
          avg_attendance?: number | null
          boundaries?: Json | null
          center_lat?: number | null
          center_lng?: number | null
          church_id?: string
          color?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          supervisor_id?: string | null
          total_groups?: number | null
          total_members?: number | null
          updated_at?: string | null
        }
        Update: {
          avg_attendance?: number | null
          boundaries?: Json | null
          center_lat?: number | null
          center_lng?: number | null
          church_id?: string
          color?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          supervisor_id?: string | null
          total_groups?: number | null
          total_members?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "zones_church_id_fkey"
            columns: ["church_id"]
            isOneToOne: false
            referencedRelation: "churches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "zones_supervisor_id_fkey"
            columns: ["supervisor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_discipleship_stats: {
        Args: { date_from?: string; date_to?: string; zone_filter?: string }
        Returns: Json
      }
      can_access_user: { Args: { target_user_id: string }; Returns: boolean }
      can_modify_user: { Args: { target_user_id: string }; Returns: boolean }
      exec_sql: { Args: { sql: string }; Returns: Json }
      get_current_user_role: { Args: never; Returns: string }
      get_user_role: { Args: { user_uuid: string }; Returns: string }
      is_super_admin: { Args: never; Returns: boolean }
      is_super_admin_user: {
        Args: { target_user_id: string }
        Returns: boolean
      }
      update_expired_invitations: { Args: never; Returns: undefined }
    }
    Enums: {
      role: "admin" | "staff" | "usuario"
      user_role:
        | "pastor"
        | "staff"
        | "supervisor"
        | "server"
        | "admin"
        | "member"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      role: ["admin", "staff", "usuario"],
      user_role: ["pastor", "staff", "supervisor", "server", "admin", "member"],
    },
  },
} as const
